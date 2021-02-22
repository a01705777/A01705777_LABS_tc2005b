//Hacer servidor para imprimir HTML de lab 1 (Mi Sitio Web)
const http = require('http'); 
const server = http.createServer( (request, response) => {
    console.log("Hola, alguien ingreso a tu página web"); 

    //Hacer todo el HTML del lab1 o tal vez otro lab 
    response.setHeader('Content-Type', 'text/html'); 
    
    //HEAD
    response.write('<head><meta charset="UTF-8"><title> Rafa Hinojosa </title></head>');

    //BODY
    response.write("<body>"); 
    response.write("<header><h1>Bienvenidos a mi sitio web </h1>");
        
    //MAIN
    response.write("<main>");
    
    //Un poco sobre mi 
    response.write("<br>");
    response.write("<section>")
    response.write("<header><h2> Un poco sobre mi </h2></header>");
    response.write("<p> Hola! Soy Rafael Hinojosa López y estudio el 4to semestre de Ingeniería en Tecnologías Computacionales.</p>");
    response.write("<p> En este sitio te compartiré algunas de mis pasiones y hobbies. Mis datos de contacto los encontrarás en la última sección de la página.</p>");
    response.write("</section>");
    
    //Aficiones
    response.write("<br>");
    response.write("<section>"); 
    response.write("<h2>Aficiones</h2>"); 
    
    //Deportes
    response.write("<article>"); 
    response.write("<header><h3> Deportes </h3></header>");
    response.write("<p>Soy fan de los deportes. Me gusta mucho saber cómo se juegan, quiénes son los mejores equipos y ver eventos deportivos.</p>");
    response.write("<p>La siguiente tabla contiene mis deportes, equipos y atletas favoritos.</p>"); 
    
    //Tabla de deportes
    response.write("<table>"); 
    
    response.write("<thead>");
    response.write("<tr>"); 
    response.write("<th>Deporte</th>");
    response.write("<th>Equipo favorito</th>");
    response.write("<th>Jugador favorito</th>");
    response.write("</tr>");
    response.write("</thead>"); 

    response.write("<tbody>");
    response.write("<tr>"); 
    response.write("<td>Béisbol</td>");
    response.write("<td>New York Yankees</td>");
    response.write("<td>Alex Rodríguez</td>");
    response.write("</tr>");

    response.write("<tr>"); 
    response.write("<td>Fútbol Soccer</td>");
    response.write("<td>Tiburones Rojos</td>");
    response.write("<td>Lionel Messi</td>");
    response.write("</tr>");

    response.write("<tr>"); 
    response.write("<td>Golf</td>");
    response.write("<td>Deporte Individual</td>");
    response.write("<td>Tiger Woods</td>");
    response.write("</tr>");
    response.write("</tbody>"); 

    response.write("<tfoot></tfoot>"); 
    response.write("</table>"); 

    response.write("<p>¿A quién prefieres?</p>");
    response.write("<form>"); 
    response.write("<input type='button' value='Messi'"); 
    response.write("<span>    </span>"); 
    response.write("<input type='button' value='Ronaldo'"); 
    response.write("</form>");
    response.write("</article>"); 

    //Música
    response.write("<br>");
    response.write("<article>");
    response.write("<header><h3>Música</h3></header>"); 
    response.write("<p>Me gusta mucho hacer y disfrutar de la mússica.</p>");
    response.write("<p>Mis canciones favoritas son: </p>");
    response.write("<ol>");
    response.write("<li>Playtime - Yanni</li>");
    response.write("<li>Tus Alas - Kim Richards</li>"); 
    response.write("<li>Cara a cara - Majo y Dan, Marcos Vidal</li>"); 
    response.write("</ol>"); 
    
    response.write("<p>¿Con cuál <strong>color</strong> identificas la música?</p>");
    response.write("<form>");
    response.write("<label>La música es color...  ");
    response.write("<input type='color'/></label>"); 
    response.write("</form>"); 
    response.write("</article>");
    response.write("</section>"); 

    //Datos de Contacto
    response.write("<br><br>");
    response.write("<section>");
    response.write("<h2>Datos de Contacto</h2>"); 
    response.write("<div>Nombre: Rafael Hinojosa López</div>");
    response.write("<div>Matrícula: A01705777</div>");
    response.write("<div>Correo: a01705777@itesm.mx</div>");
    response.write("<div>Instagram: <a href='https://www.instagram.com/rafahinojosa.embajadorestec/'> @rafahinojosa.embajadorestec</a></div>");
    response.write("</section>");

    response.write("</main>");

    //Footer
    response.write("<footer>");
    response.write("<br><br>")
    response.write("<div>Laboratorio 8 de tc2005b</div>"); 
    response.write("<div>Editor HTML utilizado: Visual Studio Code</div>");
    response.write("<div>Página web del editor: <a href='https://code.visualstudio.com/'> https://code.visualstudio.com </a></div>");
    response.write("</footer>");

    response.write("</body>");
    
    response.end();
}); 

const PUERTO = 3000; 
console.log("Hola, ingresa a http://localhost:" + PUERTO + " desde tu navegador"); 
//Lanzamos petición al servidor...
server.listen(PUERTO); 
