# Analizador de Emociones

Este proyecto es una aplicación web que permite analizar emociones en el texto ingresado por el usuario. Utiliza la API de Hugging Face para clasificar el texto según emociones como sorpresa, ira, alegría, disgusto, neutralidad, miedo o tristeza. La aplicación está diseñada para ser simple, clara y eficiente, con un diseño moderno y accesible.

## 🚀 Demo en línea

Puedes probar la aplicación en el siguiente enlace:

[**Ver la demo en vivo aquí**](#)

## 📚 Explicación del desarrollo

La aplicación se construyó utilizando tecnologías web estándar: **HTML5**, **CSS3** y **JavaScript (ES6+)**. A continuación se detalla cómo se desarrollaron las diferentes partes del proyecto:

### 1. **Estructura HTML (`index.html`)**
El HTML se encarga de la estructura básica de la página. Incluye un área para que el usuario ingrese texto, un botón para iniciar el análisis y una sección para mostrar los resultados. Además:
- Se añadieron etiquetas de accesibilidad, como `aria-label`, para asegurar que la aplicación sea fácil de usar para personas con discapacidades visuales.
- Se enlazaron los archivos de estilos CSS y el archivo de JavaScript para darle estilo y funcionalidad a la página.

**Componentes principales:**
- Un `<textarea>` donde el usuario ingresa el texto.
- Un botón `<button>` para realizar el análisis de emociones.
- Un contenedor `<div>` donde se muestran los resultados.

### 2. **Estilos CSS (`styles.css`)**
Los estilos CSS están diseñados para ofrecer una experiencia visual moderna y atractiva:
- **Diseño responsivo**: El diseño se adapta bien a pantallas de diferentes tamaños, con un contenedor centralizado que asegura una buena legibilidad tanto en móviles como en computadoras.
- **Interactividad**: Se añadieron transiciones suaves al botón y a la caja de texto para mejorar la experiencia del usuario.
- **Colores suaves**: El fondo pastel azul y los tonos beige le dan una sensación amigable y profesional a la interfaz.
  
### 3. **Funcionalidad JavaScript (`script.js`)**
El archivo JavaScript es responsable de la lógica interactiva de la aplicación. Los puntos clave de la funcionalidad son:
- **Captura de eventos**: Se escucha un evento `click` en el botón para iniciar el análisis.
- **Validación del texto**: Antes de hacer una solicitud a la API, el script verifica si el usuario ha ingresado texto. Si no, muestra una alerta pidiéndole que lo haga.
- **Conexión con la API de Hugging Face**: Se hace una solicitud a la API de Hugging Face, enviando el texto ingresado por el usuario y recibiendo como respuesta una clasificación emocional.
- **Manejo de resultados**: La API devuelve un array de emociones con un nivel de confianza asociado. Estos datos se muestran en la página de manera clara y estructurada.

### 4. **Optimización**
Durante el desarrollo, se realizaron las siguientes optimizaciones:
- **Accesibilidad mejorada**: Uso de `aria-label` en los controles de entrada y botón.
- **Reducción de repeticiones**: En JavaScript, la lógica para mostrar resultados se optimizó utilizando funciones que reducen la manipulación innecesaria del DOM.
- **Optimización de rendimiento**: Se simplificaron los estilos y se redujo el número de manipulaciones en el DOM para mejorar la eficiencia.

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Para la estructura del sitio web.
- **CSS3**: Para la estilización de la página.
- **JavaScript (ES6+)**: Para la interactividad y las solicitudes a la API.
- **API de Hugging Face**: Para la clasificación emocional del texto.

## 📝 Instrucciones de uso

### 1. **Ingreso de texto**
   - En la página principal, verás un área de texto donde puedes escribir el texto que deseas analizar. Puedes escribir cualquier texto que quieras para detectar emociones.

### 2. **Iniciar análisis**
   - Una vez que hayas ingresado el texto, haz clic en el botón "Analizar" para iniciar el proceso de análisis. El botón enviará el texto a la API de Hugging Face para que sea procesado.

### 3. **Visualización de resultados**
   - Los resultados del análisis se mostrarán en la parte inferior de la página. Se incluirá el nombre de la emoción y un porcentaje que indica el nivel de confianza de la clasificación. Las emociones pueden incluir sorpresa, ira, alegría, disgusto, neutralidad, miedo y tristeza.

## 💻 Cómo ejecutar localmente

Si prefieres ejecutar el proyecto localmente, sigue estos pasos:

### Requisitos
- Un navegador moderno.
- Conexión a Internet para hacer solicitudes a la API.

### Pasos para ejecutar:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/analizador-emociones.git
