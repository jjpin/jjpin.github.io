/*console.log('hello js');

var b=1;
console.log(b);

var a = 'hello';
a = a + 'ben';
console.log(a);

for(var i=1; i<=10; i++){
	console.log(i);
}

function add(a,b){
	return a+b;
}
console.log(add(3,7));

function add(a,b){
	var c =6;
	console.log(c);
	return a+b;
}
console.log(add(a,b));*/

$(function(){

	var currentText = '';

	$('#btn1').on('click',function(){
		//alert('hello jquery');
		//$('#message').text('hahaha');
		//$('#message').addClass('green');
		currentText = currentText + '1';
		render();
	});
	$('#btn2').on('click',function(){
		currentText = currentText + '2';
		render();
	});

	$('#btnclear').on('click',function(){
		currentText = '';
		render();
	});

	function render(){
		$('#message').text(currentText);
	}
});