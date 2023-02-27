// Método para cálculo

// document.getElementById("btn_calculo").onclick = function() {
//     var celsius = document.getElementById("icel").value;
//     if(celsius == "") {
//         alert("Você precisa preencher o campo de Celsius (°C)!");
//     }

//     else {
//         var fahrenheit = ((celsius * 1.8) + 32);
//         document.getElementById("ifah").value = fahrenheit+"°F";
//     }
// }
const celsius = document.getElementById("icel");
const fahrenheit = document.getElementById("ifah");

window.addEventListener("load", () => celsius.focus());

celsius.addEventListener("input", () => {
    fahrenheit.value = ((celsius.value * 1.8) + 32).toFixed(2)+"°F";
    if(!celsius.value) {
        fahrenheit.value = "";
    }
});

// Método para limpar campos
document.getElementById("btn_limpar").onclick = function() {
   document.getElementById("icel").value = 0;
   document.getElementById("ifah").value = "";
}