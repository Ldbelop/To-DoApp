# To-DoApp
Repositorio que contiene una aplicaci贸n de manejo de tareas sencilla hecha con ReactJS
## 馃摉 Informaci贸n del proyecto 

`build_To-DoApp/` Carpeta que contiene la build de producci贸n de la aplicaci贸n <br>
`public/` Contiene el favicon de la aplicaci贸n <br>
`src/` Carpeta que contiene la versi贸n de desarrollo de la aplicaci贸n

---
## 馃搧 Estructura de de carpetas
**_La carpeta src contiene 10 archivos_** 
  - AlertError.jsx
    - Consta de la estructura del componente de error, es usada por `TaskCreator.jsx`
  - App.jsx
    - La conjunci贸n de la aplicaci贸n completa, que contiene las funciones que procesan los estados globales
  - FormButton.jsx
    - Consta de la estructura del componente del boton submit, que cambiar谩 dependiendo si se desea actualizar o crear una tarea
  - PendingTask.jsx
    - Consta de la estructura del componente de las tareas, en donde se mostrar谩n las tareas que se ir谩n a帽adiendo, que vendr谩n invocadas del componente `task.jsx`
  - TaskCreator.jsx
    - Componente que contiene al t铆tulo y a los componentes `FormButton.jsx` y `TaskForm.jsx`
  - TaskForm.jsx
    - Componente que contiene a los controlled components `TaskInput.jsx`
  - TaskInput.jsx
    - Componente que consta de los inputs que se mostrar谩n en `TaskCreator.jsx`
  - index.css
    - Archivo que contiene el entry point de la librer铆a `tailwindcss`, c贸mo tambi茅n los estilos de la scrollbar.
  - main.jsx
    - Archivo que contiene el entry point de la aplicaci贸n
  - task.jsx 
    - Archivo que contiene al componente de las tarjetas de tareas

**_Fuera de src se encuentran_** 
  - index.html
    - Archivo .html donde se encontraran alojados nuestros componentes y aplicaci贸n
#  馃摎 Librer铆as utilizadas

- [ReactJS](https://reactjs.org/) 
- [TailwindCss](https://tailwindcss.com/) 
