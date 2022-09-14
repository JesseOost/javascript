element = document.getElementById("text");

element.innerHTML += "Hello world!<br><br>";

var1 = 54;
var2 = 23;

element.innerHTML += var1+var2 + "<br>";
element.innerHTML += var1-var2 + "<br>";
element.innerHTML += var1/var2 + "<br>";
element.innerHTML += var1*var2 + "<br>";

element.innerHTML += "<br>";

mass = 23;
speed = 300000000;

enegery = mass*(speed**2);

element.innerHTML += enegery;

element.innerHTML += "<br><br>";

const groceries = ["Brood", "Thee", "Koffie", "Fruit", "Pizza", "Kippenpoten", "Frikandellenbroodjes", "Kaas", "Melk", "Cola", "Bier"];

groceries[8] = "Limonade";

for (grocerie of groceries){
    element.innerHTML += grocerie + "<br>";
}