# To-DoApp
Repositorio que contiene una aplicación de manejo de tareas sencilla hecha con ReactJS
## 📖 Información del proyecto 

`build_To-DoApp/` Carpeta que contiene la build de producción de la aplicación <br>
`public/` Contiene el favicon de la aplicación <br>
`src/` Carpeta que contiene la versión de desarrollo de la aplicación

---
## 📁 Estructura de de carpetas
**_La carpeta src contiene 10 archivos_** 
  - AlertError.jsx
    - Consta de la estructura del componente de error, es usada por `TaskCreator.jsx`
  - App.jsx
    - La conjunción de la aplicación completa, que contiene las funciones que procesan los estados globales
  - FormButton.jsx
    - Consta de la estructura del componente del boton submit, que cambiará dependiendo si se desea actualizar o crear una tarea
  - PendingTask.jsx
    - Consta de la estructura del componente de las tareas, en donde se mostrarán las tareas que se irán añadiendo, que vendrán invocadas del componente `task.jsx`
  - TaskCreator.jsx
    - Componente que contiene al título y a los componentes `FormButton.jsx` y `TaskForm.jsx`
  - TaskForm.jsx
    - Componente que contiene a los controlled components `TaskInput.jsx`
  - TaskInput.jsx
    - Componente que consta de los inputs que se mostrarán en `TaskCreator.jsx`
  - index.css
    - Archivo que contiene el entry point de la librería `tailwindcss`, cómo también los estilos de la scrollbar.
  - main.jsx
    - Archivo que contiene el entry point de la aplicación
  - task.jsx 
    - Archivo que contiene al componente de las tarjetas de tareas

**_Fuera de src se encuentran_** 
  - index.html
    - Archivo .html donde se encontraran alojados nuestros componentes y aplicación
#  📚 Librerías utilizadas

- [ReactJS](https://reactjs.org/) 
- [TailwindCss](https://tailwindcss.com/) 
