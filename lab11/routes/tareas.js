
const express = require('express');
const router = express.Router();

router.get('/html', (request, response, next) => {
    console.log('Estas en HTML');
    let html = "<html>";
    //HEAD
    html += '<head><meta charset = "UTF-8"><title>HTML Theory</title></head>';
    
    //BODY
    html += "<body>";
    html += "<header><h1> Datos Interesantes de HTML </h1></header>";
    
    html +="<p><strong>1. ¿Cuál es el propóstito de los métodos de HTTP: GET, HEAD y POST?</strong></p>";
    html += "<ul>";
    html += "<li><strong>GET: </strong> Obtener información de un recurso específico y no modificarlos. </li>";
    html += "<li><strong>HEAD: </strong> Obtener headers y no body de un recurso. Es muy parecido a GET.  </li>";
    html += "<li><strong>POST: </strong> Enviar datos al servidor. </li>";
    html += "</ul><hr>";

    html += "<p><strong> 2. ¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</strong></p>";
    html += "<p>POST. Envías tus datos al servidor y este te responderá con un recurso. La página principal de un actor registrado en la base de datos de la página web, o un mensaje de error. Lo que se envía por POST no aparece en el URL, por lo que no aparecerán tus datos al público en general. </p>";
    html += "<hr>";
    
    html += "<p><strong>3. ¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</strong></p>";
    html += "<p> GET. Este método se utiliza para pedir la información y datos del sitio web. Una vez que el servidor acepta la petición, entonces el usuario puede ver en su pantalla el sitio web.  </p>";        html+= "</body>";
    html += "</html>";
        
    response.send(html);
});

router.get('/css', (request, response, next) => {
    console.log('Estas en CSS');
    let css = "<html>";
    //HEAD
    css += '<head><meta charset = "UTF-8"><title>CSS Theory</title></head>';
    
    //BODY
    css += "<body>";
    css += "<header><h1> Datos Interesantes de CSS </h1></header>";
    
    css += "<p><strong>1. Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS?</strong></p>";
    css += "<p>!important es una palabra reservada de CSS que debe utilizarse con cuidado. Su función es que al aplicarla a algún comando de CSS, este comando no cambiará aunque se escriba lo contrario, por ejemplo: </p>";
    css += "<p>p { padding: 1em !important; } </p>";
    css += "<p>.paragraph { padding: 4em; }</p>";
    css += "<p>Al querer aplicar la clase paragraph a algún párrafo en HTML, el padding no será de 4em como lo indica la clase, sino de 1em, porque fue declarado como ¡important en el selector de párrafo (p) previamente.</p>";
    css += "<p>Al querer aplicar la clase paragraph a algún párrafo en HTML, el padding no será de 4em como lo indica la clase, sino de 1em, porque fue declarado como ¡important en el selector de párrafo (p) previamente.</p>";
    css += "<p> Con la experiencia que tengo con HTML5, no considero necesario el uso de ¡important, pues al utilizar correctamente CSS podremos priorizar los comandos de manera correcta. Además, el utilizar esta palabra clave puede afectar el que alguien más quiera modificar tu código, pues deberá conocer muy bien las reglas impuestas por ¡important. </p>";
    css += "<hr>";

    css += "<p><strong>2. Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado? </strong></p>";
    css += "<p> Por el requisito de software no funcional de portabilidad: adaptabilidad. Las imágenes que se escojan para ser mostradas en una página web deben tener las medidas correctas para los distintos tamaños de pantallas que hay; por ejemplo: celulares, tabletas, laptops, monitores, etc. Si no se cuidan los aspectos de sus medidas para diferentes tamaños de pantallas tendremos problemas con la resolución y espacio mostrado de la imagen.</p>";
    css += "<hr>";
    

    css += "<p><strong>3. Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</strong></p>";
    css += "<ul>";
    css += "<li><strong>Porcentaje %: </strong> Es el porcentaje relativo de un objeto con su elemento contenedor.  </li>";
    css += "<li><strong>Pixel px: </strong> Es una medida relativa  y representa cuántos puntos visibles tiene una pantalla. </li>";
    css += "<li><strong>Punto pt: </strong> Es una medida absoluta y 1 punto = 1/72 pulgadas; es decir, 0.35 mm aproximadamente. </li>";
    css += "</ul>";
    css += "<p>Las medidas absolutas son poco utilizadas en el desarrollo web porque no permiten la adaptabilidad de los elementos con pantallas de diferentes tamaños. En cambio, los pixeles y porcentajes sí permiten esa adaptabilidad o compatibilidad. Con el porcentaje (%) podemos tener tamaños relativos y adecuados según la pantalla que despliegue la información, mientras que los pixeles nos sirven para que ciertos elementos tengan siempre tamaños precisos, sin importar la pantalla.</p>";
    
    css += "</body>";
    css += "</html>";

    response.send(css);
});

router.get('/js', (request, response, next) => {
    console.log('Estas en JS');
    let js = '<html>';

    //HEAD
    js += '<head><meta charset = "UTF-8"><title>JS Theory</title></head>';
        
    //BODY
    js += "<body>";
    js += "<header><h1> Datos Interesantes de JavaScript </h1></header>";
    
    js += "<p><strong>1. ¿Qué métodos tiene el objeto Date? (Menciona al menos 5*) </strong></p>";
    js += "<ul>";
    js += "<li><strong>getDate(): </strong> retorna los días del mes [1,…, 31] </li>";
    js += "<li><strong>getDay(): </strong> retorna los días de la semana [0, …, 6] </li>";
    js += "<li><strong>getFullYear() </strong> retorna el año.  </li>";
    js += "<li><strong>getMilliseconds(): </strong> retorna los milisegundos [0, …, 999] </li>";
    js += "<li><strong>getMinutes(): </strong> retorna los minutos [0, …, 59] </li>";
    js += "<li><strong>getHours(): </strong> retorna la hora [0, …, 23] </li>";
    js += "</ul>";
    js += "<hr>";

    js += "<p><strong>2. ¿Qué métodos tienen los arreglos? (Menciona al menos 5*)</strong></p>";
    js += "<ul>";
    js += "<li><strong>toString(): </strong> convierte un arreglo en un string con los elementos separados por comas.  </li>";
    js += "<li><strong>pop(): </strong> elimina el último elemento del arreglo. </li>";
    js += "<li><strong>push(): </strong> agrega un elemento al final del arreglo. </li>";
    js += "<li><strong>concat(): </strong> retorna un nuevo arreglo hecho por la concatenación de otros arreglos. </li>";
    js += "<li><strong>splice(): </strong>  se utiliza para insertar elementos en una posición del array y eliminar un cierto número de elementos a partir de esa posición. </li>";
    js += "</ul>";
    js += "<hr>";
    
    js += "<p><strong>3. ¿Cómo se declara una variable con alcance local dentro de una función? </strong></p>";
    js += "<p> Con la palabra reservada let. Por ejemplo: let x = 10; </p>";

    js += "</body>";
    js += "</html>";

    response.send(js);
});

router.get('/', (reques, response, next) => {
    console.log('Estas en tareas');
    response.send('<h1> Tareas </h1>');
});

router.use( (request, response, next) => {
    response.status(404).send('<h1> Page Not Found </h1>');
});

module.exports = router;


