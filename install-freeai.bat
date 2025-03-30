echo "Downloading Add-In Manifest"
wget https://raw.githubusercontent.com/jacobbeasley/excel-freeai/master/freegenai-manifest-dist.xml
echo "Registering with Excel"
reg add "HKEY_CURRENT_USER\Software\Microsoft\Office\16.0\WEF\Developer" /v af26d049-d35a-4e62-bdbf-b0f076b05cbf /d "%cd%\freegenai-manifest-dist.xml" /t REG_SZ    
echo "Done. Please restart Excel and you should see it as an available add-in."
pause