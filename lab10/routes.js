const requestHandler = (request, response) => {
    console.log("Hola desde el servidor");
    console.log(request.url);

    //HTML 
    if(request.url === "/html_data") {
        //Escribir todo el HTML 
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset = "UTF-8"><title>404 - Page not Found</title></head>');
        response.write("<body><h1>Estas en HTML </h1></body>");
        response.write("</html>");   
    }
    //CSS
    else if(request.url === "/css_data") {
        console.log("Estas en CSS");
    }
    //JS
    else if(request.url === "/js_data") {
        console.log("Estas en JS");
    }
    // /
    else if(request.url === "/" || request.url === ""){
        console.log("Hola desde el /");
    }
    // 404 - Not Found
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset = "UTF-8"><title>404 - Page not Found</title></head>');
        response.write("<body><h1>La página que buscas no existe</h1></body>");
        response.write("</html>");
        return response.end();
    }
} 

module.exports = requestHandler;