# Proyecto

Este proyecto es una aplicacion web de backend hecha con Node.js y Express. Sirve para gestionar una lista de productos usando una arquitectura de tres capas (rutas, controladores y servicios). Los datos se guardan de forma local en un archivo JSON que funciona como la base de datos de la aplicacion.

## Estructura del proyecto

El codigo esta organizado en las siguientes carpetas:
- src/routes: Contiene las rutas de la API.
- src/controllers: Contiene la logica que recibe las peticiones y envia las respuestas.
- src/services: Contiene las funciones que leen y escriben los datos.
- src/data: Aqui esta el archivo productos.json que guarda la informacion.
- public: Aqui esta el archivo index.html con la interfaz de usuario.

## Rutas de la API

La aplicacion cuenta con los siguientes puntos de acceso:
- GET /api/productos: Devuelve la lista completa de productos guardados.
- GET /api/productos/:id: Devuelve los datos de un solo producto segun su ID.
- POST /api/productos: Registra un producto nuevo. Requiere que el usuario tenga la cookie de sesion.
- GET /api/login-simulado: Crea la cookie de sesion para poder probar el funcionamiento del POST.

## Sistema de seguridad

Para proteger la creacion de productos se configuraron cookies de sesion. Si se intenta usar la ruta POST para agregar un producto sin antes haber entrado a la ruta del login simulado para obtener la cookie, el servidor denegara el acceso devolviendo un error 401 Unauthorized.

## Como ejecutar el proyecto

1. Entrar a la carpeta del proyecto desde la terminal:
cd proyecto-backend

2. Instalar los paquetes necesarios:
npm install

3. Iniciar el servidor de Node.js:
node src/app.js

4. Probar la aplicacion:
Abrir el navegador de internet e ingresar a la direccion http://localhost:3000

## Historial de commits realizados

A continuacion se detalla el progreso registrado en el repositorio de Git durante el desarrollo:

1. Primer commit: Base del proyecto
git commit -m "feat: estructura de carpetas y archivo de datos inicial"
Explicacion: Se creo el entorno de trabajo y el archivo JSON con los datos iniciales.

2. Segundo commit: Logica de capas
git commit -m "chore: estructura de capas completada y depurando rutas estaticas"
Explicacion: Se crearon los archivos de rutas, controladores y servicios para separar las responsabilidades.

3. Tercer commit: Integracion del frontend
git commit -m "feat: integracion completa de maqueta frontend con backend de productos"
Explicacion: Se conecto la interfaz HTML de la carpeta public con el funcionamiento del servidor backend.
