# Iniciar proyecto de git    
git init

# Preparar archivos que se convierten en commit 
git add .

# El punto es para agregar todos lops archivos modificados

# Crear commit con su mensaje en
git commit -m "Aqui va el mensaje"

# Agregar remoto "Solo la primera vez"

git remote add origin git@github.com:ivanDK5/santander-front.git

# Enviar commits al servidor de github
git push -u origin master