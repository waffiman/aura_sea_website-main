@echo off
echo Starting AURA SEA website...
echo Please wait a few seconds...
set NODE_ENV=development
set PORT=5174
npx tsx server/index.ts
pause
