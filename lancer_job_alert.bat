@echo off
for /f "tokens=*" %%i in ('powershell -command "[System.Environment]::GetEnvironmentVariable(\"GEMINI_API_KEY\", \"User\")"') do set GEMINI_API_KEY=%%i
"C:\Users\roman\AppData\Local\Programs\Python\Python314\python.exe" "d:\romain-gabas-portfolio\job_alert.py"
