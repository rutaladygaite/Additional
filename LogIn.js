var vardasElement = document.querySelector("#id");
var passElement = document.querySelector("#pass");
var mas = [];
var priJSON = localStorage.getItem("idpass");
var mas = JSON.parse(priJSON);

if(mas === null){
	mas = [];
}

var spausk = document.querySelector(".mygtukas");
spausk.addEventListener("click", check);

function check (){
	var vardas = vardasElement.value;
	var pass = passElement.value;
	var logIn = {
		"vardas": vardas,
		"pass": pass,
	}

if(chechForDublicates(logIn)){
	alert("Toks vartotojas jau egzistuoja");
	return;
}

mas.push(logIn);
priJSON = JSON.stringify(mas);
localStorage.setItem("idpass", priJSON);
}

function chechForDublicates (logIn){
	var dublikatas = false;

	mas.forEach(function(item){
		if (item.vardas == logIn.vardas && item.pass == logIn.pass)
		{
			dublikatas = true;
		}
	});
return dublikatas;
}