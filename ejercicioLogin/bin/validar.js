var BotonValidar = document.getElementById("validar");
BotonValidar.addEventListener("click", function () {
    var params = new URLSearchParams();
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    params.append("usu", usuario);
    params.append("pass", password);
    console.log("---------------------------------------")
    console.log("{" + "name:'" + params.get("usu") + "'," + "pass:'" + params.get("pass") + "'}");
    //var params2 = "{" + "name:'" + params.get("nombre") + "'," + "pass:'" + params.get("pass") + "'}";  // forma de equívoca de construir el objeto, ya que le sobran las llaves
    var params3 =  "name:'" + params.get("usu") + "'," + "pass:'" + params.get("pass") + "'";
    axios.post("http://localhost:4567/holaJson", { "usu": params.get("usu"), pass: params.get("pass") } )
        .then(function (rs) {
            console.log(rs.data);
            //alert(rs.data)
        })
        .catch(function (error) {
            console.log(error);
        });

        //Validar si los datos son correctos

        if(params.get("usu") == "BryanDuran"){
            if(params.get("pass") == "1234"){
                console.log("Si entro a los if´s");
                window.location.replace('ListaUsuarios.html'); 
            }
        }else{
            window.location.replace('Registrarse.html');  
             
        }