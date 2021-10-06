import static spark.Spark.*;



public class App {
    public static void main(String[] args) throws Exception {

String accessControlRequestHeaders = request.headers("Access.Control-Request-Headers");
if(accessControlRequestHeaders != null){
    response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
}

String accessControlRequestMethod = request.headers("Access.Control-Request-Method");
if(accessControlRequestMethod != null){
    response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
}




        System.out.println("Hello, World!");
        get("hola", (rq,rs)->{
        System.out.println ("Request: " + rq.queryParams("nombre") + " " + rq.queryParams("pass"));
        String msj;
        if(rq.queryParams("nombre").equals("root"))
        msj = "Bienvenido";
    return "Hola get " + msj + "<a href= '//127.0.0.1:5500/formulario.html'>regresar</a>";
});

get("/luis", (rq,rs)->"luis");
get("/ariana", (rq,rs)->"Ariana");

get("/hola post", (rq,rs)->"Hola post");



    }
   
}
