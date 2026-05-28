#  API REST de Gestión de Productos

Este proyecto consiste en un backend desarrollado en **Node.js** y **Express** utilizando una arquitectura limpia organizada en tres capas (Rutas, Controladores y Servicios). El sistema permite listar, consultar detalles y almacenar productos utilizando un archivo JSON como persistencia de datos local, protegiendo los endpoints de escritura mediante cookies de sesión.

---

## Arquitectura del Proyecto (Capas)

La estructura está diseñada siguiendo buenas prácticas para separar las responsabilidades del código:
* `src/routes/`: Define los puntos de acceso (endpoints) de la aplicación.
* `src/controllers/`: Maneja la lógica de control, peticiones HTTP y respuestas.
* `src/services/`: Contiene la lógica de negocio y la manipulación del archivo de datos.
* `src/data/`: Almacena el archivo JSON que simula la base de datos.
* `public/`: Contiene la interfaz gráfica estática (Frontend) para interactuar con la API.

---

## Endpoints de la API

| Método | Endpoint | Descripción | Requiere Autenticación |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/productos` | Obtiene la lista completa de productos. | No |
| **GET** | `/api/productos/:id` | Obtiene el detalle de un producto específico según su ID. | No |
| **POST** | `/api/productos` | Registra un nuevo producto en el archivo JSON. | **Sí (Cookie)** |
| **GET** | `/api/login-simulado`| Establece la cookie de sesión necesaria para hacer POST. | No |

---

## Mecanismo de Seguridad (Autenticación)

Para poder realizar peticiones de creación (**POST**), el servidor exige la presencia de una cookie de sesión llamada `session_token` con el valor `token_valido_123`. 
* Si se intenta crear un producto sin haber obtenido la cookie previamente, el backend responderá firmemente con un código de estado **`401 Unauthorized`**.

---

## Instrucciones de Instalación y Uso

1. **Clonar el repositorio e ingresar a la carpeta:**
   ```bash
   cd proyecto-backend

   **Commit 1 
   git commit -m "feat: estructura de carpetas y archivo de datos inicial"
   **Commit 2
   git commit -m "chore: estructura de capas completada y depurando rutas estaticas"
   **Comit 3
   git commit -m "feat: integracion completa de maqueta frontend con backend de productos"
