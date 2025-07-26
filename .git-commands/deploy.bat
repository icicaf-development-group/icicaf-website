@echo off
cd /d "E:\ICICAF\icicaf-website"

echo "=== ESTADO DEL REPOSITORIO ==="
git status

echo.
echo "=== AGREGANDO ARCHIVOS AL STAGING ==="
git add .

echo.
echo "=== HACIENDO COMMIT ==="
git commit -m "feat: Mejorar diseño de secciones Clientes, Nosotros y Contacto

- Actualizar sección Clientes con diseño moderno usando Tailwind CSS
- Agregar efectos hover y animaciones de entrada
- Incluir estadísticas y call-to-action
- Mejorar sección Nosotros con misión, visión y valores
- Agregar metodología de trabajo y tecnologías
- Renovar sección Contacto con formulario completo
- Incluir múltiples canales de contacto y FAQ
- Implementar diseño responsive y efectos interactivos"

echo.
echo "=== HACIENDO PUSH A MAIN ==="
git push origin main

echo.
echo "=== COMPLETADO ==="
pause