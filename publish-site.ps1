# Publish the Haki site to GitHub Pages.
# Source of truth: site/ in this repo. Target: Haki-Productions.github.io (public, root).
# Run from the repo root. Requires gh to be authenticated as Haki-Productions.

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$source = Join-Path $repoRoot 'site'
$publish = Join-Path $repoRoot '.publish'

if (-not (Test-Path $source)) { throw "site/ folder not found" }

# Ensure the publish clone exists
if (-not (Test-Path (Join-Path $publish '.git'))) {
    git clone https://github.com/Haki-Productions/Haki-Productions.github.io.git $publish 2>&1 | Out-Null
}

Push-Location $publish
git pull --rebase 2>&1 | Out-Null

# Clear everything except .git, then copy the site (excluding the internal design doc)
Get-ChildItem -Force -Exclude '.git' | Remove-Item -Recurse -Force
robocopy $source $publish /E /XF DESIGN.md *.md /XD .impeccable /NFL /NDL /NJH /NJS /NC /NS | Out-Null

git add -A
$changes = git status --porcelain
if (-not $changes) { Write-Host "Nothing to publish."; Pop-Location; return }
git commit -m ("Publish Haki site - " + (Get-Date -Format 'yyyy-MM-dd HH:mm')) | Out-Null
git push origin main
Pop-Location

Write-Host "Published. Live at https://haki-productions.github.io/"