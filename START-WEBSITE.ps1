$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

$node = Get-Command node -ErrorAction SilentlyContinue
if (-not $node) {
  Write-Host 'Node.js is not installed or is not on PATH.' -ForegroundColor Red
  Write-Host 'Install Node.js 22 LTS from https://nodejs.org/en/download'
  exit 1
}

$major = [int](node -p "process.versions.node.split('.')[0]")
if ($major -ne 22) {
  Write-Host "Detected Node.js major version $major. This project is configured for Node.js 22 LTS." -ForegroundColor Red
  Write-Host 'Install Node.js 22 LTS, reopen PowerShell, and run this script again.'
  exit 1
}

if (-not (Test-Path '.\node_modules\.bin\vite.cmd')) {
  Write-Host 'Installing dependencies...'
  npm install
  if ($LASTEXITCODE -ne 0) { throw 'npm install failed.' }
}

Start-Process 'http://localhost:5173/'
npm run dev -- --host 127.0.0.1
