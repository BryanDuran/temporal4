import static spark.Spark.*;
import com.google.gson;

public class App {
    private static usuario = new Usuario("1", "bryan@gmail.com", "12345");
    public static void main(String[] args)
        System.out.println("Hello, World!");
        

        get("/", (req,res)->usuario);
        post("/", (req,res)->"mensaje post");
    }
}

