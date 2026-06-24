#!/usr/bin/env python3
"""scout-promote — consolida achados do staging para a base de referência.

Lê `new_learnings.md` (staging) e, para cada achado, anexa uma entrada
equivalente no arquivo de referência (`ref_*.md`) correspondente ao seu domínio.

É idempotente: cada achado é deduplicado pela URL, então rodar várias vezes não
gera duplicatas. Por isso pode ser disparado a cada push do staging (e não apenas
semanalmente), garantindo que nenhum achado se perca na rotação do staging.

O script NÃO altera o staging — a rotação dos achados antigos continua sob
responsabilidade do processo do research-scout. Aqui só lemos o staging e
escrevemos nos `ref_*.md`.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

# Mapeia o rótulo "Domínio:" de cada achado para o arquivo de referência.
# Domínios não listados caem no DEFAULT_REF e são reportados como aviso.
DOMAIN_TO_REF: dict[str, str] = {
    "ai & llms": "ref_ai_trends.md",
    "ai e llms": "ref_ai_trends.md",
    "business": "ref_business.md",
    "design": "ref_design.md",
    "social media": "ref_social_media.md",
    "creators-ig-tiktok": "ref_social_media.md",
    "dev workflows": "ref_dev_workflows.md",
}
DEFAULT_REF = "ref_ai_trends.md"

REF_TITLES = {
    "ref_ai_trends.md": "AI & LLMs",
    "ref_business.md": "Business",
    "ref_design.md": "Design",
    "ref_social_media.md": "Social Media",
    "ref_dev_workflows.md": "Dev Workflows",
}

DATE_HEADER_RE = re.compile(r"^###\s+(\d{4}-\d{2}-\d{2})\s*$")
FINDING_RE = re.compile(r"^- \*\*\[(?P<title>.+?)\]\((?P<url>.+?)\)\*\* — (?P<body>.*)$")
DOMAIN_RE = re.compile(r"\s*Domínio:\s*(?P<domain>.+?)\.?\s*$")
URL_IN_REF_RE = re.compile(r"Source:\s*(?P<url>\S+)")


class Finding:
    def __init__(self, date: str, title: str, url: str, description: str, domain: str):
        self.date = date
        self.title = title
        self.url = url
        self.description = description
        self.domain = domain

    @property
    def ref_file(self) -> str:
        return DOMAIN_TO_REF.get(self.domain.strip().lower(), DEFAULT_REF)

    def to_ref_line(self) -> str:
        desc = self.description.rstrip()
        if desc and not desc.endswith((".", "!", "?")):
            desc += "."
        return f"- **{self.title}** ({self.date}) — {desc} Source: {self.url}"


def parse_staging(text: str) -> list[Finding]:
    findings: list[Finding] = []
    current_date = ""
    for line in text.splitlines():
        date_m = DATE_HEADER_RE.match(line)
        if date_m:
            current_date = date_m.group(1)
            continue
        find_m = FINDING_RE.match(line)
        if not find_m:
            continue
        body = find_m.group("body")
        dom_m = DOMAIN_RE.search(body)
        domain = dom_m.group("domain").strip() if dom_m else ""
        description = DOMAIN_RE.sub("", body).rstrip() if dom_m else body.rstrip()
        findings.append(
            Finding(
                date=current_date or "????-??-??",
                title=find_m.group("title").strip(),
                url=find_m.group("url").strip(),
                description=description,
                domain=domain,
            )
        )
    return findings


def existing_urls(ref_text: str) -> set[str]:
    return set(URL_IN_REF_RE.findall(ref_text))


def ensure_ref_file(path: Path) -> str:
    if path.exists():
        return path.read_text(encoding="utf-8")
    title = REF_TITLES.get(path.name, path.stem)
    return f"# References: {title}\n\n"


def promote(dry_run: bool = False) -> int:
    staging_path = REPO_ROOT / "new_learnings.md"
    if not staging_path.exists():
        print("new_learnings.md não encontrado — nada a fazer.", file=sys.stderr)
        return 0

    findings = parse_staging(staging_path.read_text(encoding="utf-8"))
    if not findings:
        print("Nenhum achado parseável no staging.")
        return 0

    # Agrupa por arquivo de referência de destino.
    by_ref: dict[str, list[Finding]] = {}
    unknown_domains: set[str] = set()
    for f in findings:
        if f.domain.strip().lower() not in DOMAIN_TO_REF:
            unknown_domains.add(f.domain or "(vazio)")
        by_ref.setdefault(f.ref_file, []).append(f)

    promoted = 0
    for ref_name, ref_findings in sorted(by_ref.items()):
        ref_path = REPO_ROOT / ref_name
        ref_text = ensure_ref_file(ref_path)
        seen = existing_urls(ref_text)

        new_lines: list[str] = []
        for f in ref_findings:
            if f.url in seen:
                continue
            seen.add(f.url)
            new_lines.append(f.to_ref_line())

        if not new_lines:
            continue

        promoted += len(new_lines)
        if not ref_text.endswith("\n"):
            ref_text += "\n"
        ref_text += "\n".join(new_lines) + "\n"

        if dry_run:
            print(f"[dry-run] {ref_name}: +{len(new_lines)} achado(s)")
            for ln in new_lines:
                print(f"    {ln}")
        else:
            ref_path.write_text(ref_text, encoding="utf-8")
            print(f"{ref_name}: +{len(new_lines)} achado(s) promovido(s)")

    if unknown_domains:
        print(
            f"AVISO: domínio(s) sem mapeamento explícito, roteado(s) para {DEFAULT_REF}: "
            + ", ".join(sorted(unknown_domains)),
            file=sys.stderr,
        )

    if promoted == 0:
        print("Nada novo a promover (tudo já consta nas referências).")
    else:
        print(f"Total promovido: {promoted} achado(s).")
    return promoted


def main() -> int:
    parser = argparse.ArgumentParser(description="Promove achados do staging para os ref_*.md")
    parser.add_argument("--dry-run", action="store_true", help="Mostra o que faria sem escrever.")
    args = parser.parse_args()
    promote(dry_run=args.dry_run)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
