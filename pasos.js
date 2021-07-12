/*
    Cuando comenzamos un nuevo proyecto

1) Inicializar un proyecto con node.
 En terminal:
 npm init -y 

 Luego, revisar que el valor de la propiedad "name" del archivo del package.json no tenga mayuscula, espacio o "express"

 También checkear que la propiedad "main" tenga como valor "app.js"  (este sería el entry point)


 2)Instalar express.
 en consola:
 npm i express --save

En el package.json en el objeto literal de "dependencies" aparecerán los nombres de los módulos que vallamos instalando, en este caso aparecerá la propiedad:
"express": "^4.17.1"

3) Almacenar el proyecto en gitHub
En consola:
git init


4)Crear el archivo:
.gitignode

5)Y como contenido escribir:
node_modules

con esto estamos ignorando la carpeta o archivo que nombremos para que no subirlo al repo de gitHub

 */