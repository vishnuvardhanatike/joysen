@echo off
setlocal
cd /d "%~dp0"
title Joysen Tattoo Studio Kondapur - Local Website

echo ============================================
echo   Joysen Tattoo Studio Kondapur - Local Website
echo ============================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js is not installed or not on PATH.
  echo Install Node.js 22 LTS from https://nodejs.org/en/download
  pause
  exit /b 1
)

for /f "tokens=1 delims=.v" %%v in ('node -p "process.versions.node"') do set NODE_MAJOR=%%v
echo Detected Node.js major version: %NODE_MAJOR%
if not "%NODE_MAJOR%"=="22" (
  echo.
  echo ERROR: This project is configured for Node.js 22 LTS.
  echo Your current Node.js version is not 22.
  echo Install Node.js 22 LTS, close this window, and try again.
  pause
  exit /b 1
)

echo.
if not exist "node_modules\.bin\vite.cmd" (
  echo Installing project dependencies. This may take a few minutes...
  call npm install
  if errorlevel 1 goto install_failed
) else (
  echo Vite dependency found. Skipping installation.
)

echo.
echo Starting Vite. Keep this window open while using the website.
start "" http://localhost:5173/
call npm run dev -- --host 127.0.0.1
pause
exit /b 0

:install_failed
echo.
echo Dependency installation failed. Check the npm error above.
pause
exit /b 1
