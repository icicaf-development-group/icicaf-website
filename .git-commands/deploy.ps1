# Script de PowerShell para hacer deploy
Set-Location -Path "E:\ICICAF\icicaf-website"

Write-Host "=== ESTADO DEL REPOSITORIO ===" -ForegroundColor Green
git status

Write-Host "`n=== AGREGANDO ARCHIVOS AL STAGING ===" -ForegroundColor Green
git add .

Write-Host "`n=== HACIENDO COMMIT ===" -ForegroundColor Green
git commit -m "feat: Mejorar diseño de secciones Clientes, Nosotros y Contacto

- Actualizar sección Clientes con diseño moderno usando Tailwind CSS
- Agregar efectos hover y animaciones de entrada
- Incluir estadísticas y call-to-action
- Mejorar sección Nosotros con misión, visión y valores
- Agregar metodología de trabajo y tecnologías
- Renovar sección Contacto con formulario completo
- Incluir múltiples canales de contacto y FAQ
- Implementar diseño responsive y efectos interactivos"

Write-Host "`n=== HACIENDO PUSH A MAIN ===" -ForegroundColor Green
git push origin main

Write-Host "`n=== COMPLETADO ===" -ForegroundColor Green
Write-Host "¡Deploy realizado exitosamente!" -ForegroundColor Yellow