console.log('Witaj');
for(var i=0; i<3; i++){
	if(i%2==0){
		console.log(i+'A');
	}
	else{
		console.log(i+'B');
	}
}

var tablica=[2,6,5,8,9];
tablica.push(10);
console.log(tablica);

console.log(tablica.slice(1,4));

function fun(i){
	if(i>3){
		return true;
	}
	else{
		return false;
	}
}
console.log(tablica.filter(fun));


function pisz(){
	console.log("Hello world");
	//alert("Witaj na mojej stronie");
}

function klik(imie){
	console.log(imie);
}

//document.write(56);
function zmienKolor(){
	var paragrafy=document.getElementsByTagName("p");
	var par=paragrafy[0];
	
	if(par.style.color==="green"){
		par.style.color="red";
	}
	else{
		par.style.color="green";
	}
}

function klikacz(){
	var zm=document.getElementById('Zosia');
	zm.innerText="to samosia";
	
	var nowyP=document.createElement("p");
	nowyP.innerText="Kmail Figon";
	
	var div=document.getElementById('kontener');
	div.appendChild(nowyP);
}

function generujListe(ilosc){
	var div=document.getElementById('kontener');
	var lista=document.createElement("ol");

	for(var i=0; i<ilosc;i++){
		var elem=document.createElement("li");
		elem.innerText="pies";
		lista.appendChild(elem);
	}
	div.appendChild(lista);
}