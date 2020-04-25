const c1=document.getElementById('color_1');
const c2=document.getElementById('color_2');
const body=document.getElementById('BodyDIV');
const res=document.getElementById('Resulttext');


form.addEventListener('submit', function(){
	console.log(c1.value);
	console.log(c2.value);
	body.style.background=`linear-gradient(to right,${c1.value},${c2.value})`;
	res.innerHTML=`The Result is ${c1.value},${c2.value}`;
});