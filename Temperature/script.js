
//creating a function for converting temptures
function convertTempeture(){
    var input = document.getElementById("inputTemp").value;
    var unit = document.querySelector("input[name='name']:checked").value;
    var result;

    //celcus to Farinhad
    if(unit == "C"){
        result = (input * 9/5)+32;

        //farinjhard to celcus
    }else{
        result = (input - 32) * 5 / 9;
    };
    document.getElementById("answer").textContent = input + "°" + unit + " is equal to = " + result + "°" + (unit === "C" ? "F" : "C");

}
var convertButton = document.getElementById("changebtn");
changebtn.addEventListener("click", convertTemperature());