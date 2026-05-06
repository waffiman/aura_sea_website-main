@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo AURA SEA: build + upload (FTP, FTPS, SFTP 22/2222)
echo.
set /p FTP_PASS=Enter cPanel/FTP password: 
if "%FTP_PASS%"=="" (echo Cancelled. & pause & exit /b 1)
set "FTP_USER=auraseao"
set "FTP_HOST=198.251.88.188"
call npm install
if errorlevel 1 (pause & exit /b 1)
call npm run build:pages
if errorlevel 1 (pause & exit /b 1)
call npm run upload:auto
if errorlevel 1 (
  echo.
  echo All uploads failed. Often port 21 is blocked: try mobile hotspot or VPN.
  echo Or upload dist\public via cPanel File Manager in browser (HTTPS).
  pause
  exit /b 1
)
echo.
echo Done. Open https://www.aurasea.org
pause