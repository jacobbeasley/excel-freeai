echo "Downloading manifest to sideload in Excel"
wget -P ~/Library/Containers/com.microsoft.Excel/Data/Documents/wef https://raw.githubusercontent.com/jacobbeasley/excel-freeai/master/freegenai-manifest-dist.xml
echo "Done. Restart Excel and you should see the add-in as an available Developer Add-In."
pause