@echo off
cd /d "%~dp0"
where py >nul 2>&1
if %errorlevel%==0 (
  start "" "http://localhost:8080"
  py -m http.server 8080
  exit /b
)
where python >nul 2>&1
if %errorlevel%==0 (
  start "" "http://localhost:8080"
  python -m http.server 8080
  exit /b
)
echo No se encontro Python. Abre index.html directamente o instala Python para usar el panel entre paginas.
pause
