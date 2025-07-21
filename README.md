# API de Gestión de Productos con Autenticación

Una API RESTful robusta y escalable diseñada para la administración de productos de un catálogo, permitiendo operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y garantizando la seguridad mediante autenticación basada en JWT. La información de los productos se aloja en una base de datos NoSQL en la nube utilizando **Firestore de Firebase**.

---

## 💡 Descripción del Proyecto

Este proyecto cumple con los requerimientos de una tienda oficial que necesita una API para administrar su catálogo de productos. Se enfoca en una arquitectura por capas para garantizar escalabilidad y mantenimiento, separando claramente las responsabilidades en rutas, controladores, servicios y modelos, además de gestionar la configuración y los middlewares.

Se presta especial atención al manejo de errores, proporcionando respuestas claras para estados como 404 (ruta no encontrada), 401/403 (errores de autenticación/autorización), y 400/500 (errores en la petición o en los servicios externos).

---

## 🚀 Características Principales

* **Gestión Completa de Productos (CRUD):** Permite listar, obtener por ID, crear, actualizar y eliminar productos.
* **Autenticación Segura (JWT):** Acceso protegido a las rutas de gestión de productos mediante JSON Web Tokens.
* **Base de Datos en la Nube:** Persistencia de datos en **Firestore de Firebase**.
* **Arquitectura Modular:** Separación clara en capas (Rutas, Controladores, Servicios, Modelos, Middlewares, Configuración).
* **Manejo de Errores Exhaustivo:**
    * `404 Not Found`: Para rutas no definidas.
    * `401 Unauthorized / 403 Forbidden`: Para fallos de autenticación o acceso no autorizado.
    * `400 Bad Request / 500 Internal Server Error`: Para errores de petición o fallos en servicios de datos.
* **Configuración Flexible:** Uso de variables de entorno para datos sensibles y configuraciones.
* **CORS Habilitado:** Permite peticiones de origen cruzado desde aplicaciones frontend.

---

## 🛠️ Tecnologías Utilizadas

* **Backend:**
    * [Node.js](https://nodejs.org/es/)
    * [Express.js](https://expressjs.com/es/) (Framework web)
    * [CORS](https://www.npmjs.com/package/cors) (Middleware para habilitar Cross-Origin Resource Sharing)
    * [Body-parser](https://www.npmjs.com/package/body-parser) (Middleware para parsear cuerpos de petición)
    * [Dotenv](https://www.npmjs.com/package/dotenv) (Para cargar variables de entorno desde un archivo `.env`)
    * [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (Para la implementación de JWT)
* **Base de Datos:**
    * [Google Firebase (Firestore)](https://firebase.google.com/docs/firestore) (Servicio de base de datos NoSQL en la nube)
* **Control de Versiones:**
    * [Git](https://git-scm.com/)
    * [GitHub](https://github.com/)

---

## ⚡ Cómo Empezar

Sigue estos pasos para configurar y ejecutar la API en tu entorno local.

### Prerrequisitos

Asegúrate de tener instalado lo siguiente en tu sistema:

* **Node.js** (versión recomendada 14 o superior): Puedes descargarlo desde [nodejs.org](https://nodejs.org/es/download/). `npm` (gestor de paquetes de Node.js) se instala automáticamente con Node.js.
* **Git**: Puedes descargarlo desde [git-scm.com](https://git-scm.com/downloads).
* **Cuenta de Google/Firebase**: Necesitarás una para configurar Firestore.

### Instalación

1.  **Clonar el repositorio:**
    Abre tu terminal o línea de comandos y ejecuta:

    ```bash
    git clone [https://github.com/](https://github.com/)<tu_usuario>/api-productos.git
    cd api-productos
    ```

2.  **Instalar dependencias:**
    Una vez dentro del directorio del proyecto, instala todas las dependencias necesarias:

    ```bash
    npm install
    ```

### Configuración de Firebase

1.  **Crear un Proyecto en Firebase:**
    * Ve a la [Consola de Firebase](https://console.firebase.google.com/).
    * Haz clic en "Agregar proyecto" y sigue los pasos para crear un nuevo proyecto de Firebase.
2.  **Configurar Firestore:**
    * Dentro de tu proyecto de Firebase, ve a la sección "Firestore Database" en el menú de la izquierda.
    * Haz clic en "Crear base de datos" y selecciona el modo de inicio (`production mode` para reglas más estrictas o `test mode` para pruebas, ajusta las reglas de seguridad según sea necesario).
    * Crea una **colección** llamada `products` (o el nombre que uses en tu código).
    * Agrega un primer **documento** de ejemplo a la colección `products` para definir la estructura y tipos de datos esperados (ej. `nombre: String, descripcion: String, precio: Number, stock: Number, categoria: String`).
3.  **Obtener Credenciales de Servicio:**
    * En la Consola de Firebase, ve a "Project settings" (Configuración del proyecto) (el icono de engranaje junto a "Project Overview").
    * Selecciona la pestaña "Service accounts" (Cuentas de servicio).
    * Haz clic en "Generate new private key" (Generar nueva clave privada). Esto descargará un archivo JSON con tus credenciales. **Guarda este archivo de forma segura** en la raíz de tu proyecto (ej. `firebase-admin-sdk.json`) o en una ubicación segura y referencia su ruta en `.env`. **No subas este archivo a GitHub.**

### Configuración de Variables de Entorno

Crea un archivo llamado `.env` en la raíz de tu proyecto. Este archivo contendrá las variables de entorno cruciales para la API.

```dotenv
# Archivo .env
PORT=3000 # Puerto en el que la API escuchará (puedes cambiarlo)

# Clave secreta para firmar y verificar JSON Web Tokens (JWT)
# Genera una cadena aleatoria y larga para mayor seguridad.
JWT_SECRET=tu_secreto_jwt_super_seguro_y_largo_aqui

# Ruta al archivo de credenciales de Firebase Admin SDK
# Si el archivo está en la raíz de tu proyecto, solo el nombre
FIREBASE_SERVICE_ACCOUNT_PATH=firebase-admin-sdk.json
