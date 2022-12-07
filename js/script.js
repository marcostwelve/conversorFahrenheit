
// Método para cálculo
document.getElementById("btn_calculo").onclick = function() {
    var celsius = document.getElementById("icel").value;
    if(celsius == "") {
        alert("Você precisa preencher o campo de Celsius (°C)!");
    }
    else {
        var comparacao = document.getElementById("comparacao");
        comparacao.style.display = "block";
        var fahrenheit = ((celsius * 1.8) + 32);
        document.getElementById("fah").innerHTML = `
            <div id=fah>
                <label for="ifah">°F:</label>
                <input type="text" id="ifah"" value="${fahrenheit.toFixed(1)}°F"/>
            </div>    
        `
    }
}

// Método para limpar campos
document.getElementById("btn_limpar").onclick = function() {
   var comparacao = document.getElementById("comparacao");
   comparacao.style.display = "none"; 
   var celsius = document.getElementById("icel");
   var fahrenheit = document.getElementById("fah");
   celsius.value = "";
   fahrenheit.innerHTML = "";
}