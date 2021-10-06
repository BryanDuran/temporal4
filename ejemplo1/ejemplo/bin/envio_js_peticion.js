
const email = document.getElementById("exampleInputEmail");
const pass = document.getElementById("exampleInputPassword");

var btnGet = document.getElementById("btnGet");
btnGet.addEventListener("click", function (){
    var params = new URLSearchParams();
    params.append("nombre");
    params.append("pass");

    axios.get("http://localhost:4567/hola", params);
});