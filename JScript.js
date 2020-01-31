function resetDice(){
	var dice1=Math.ceil((Math.random())*6);
	var dice2=Math.ceil((Math.random())*6);
	document.getElementsByClassName('img1')[0].src='images/dice'+dice1+'.png';
	document.getElementsByClassName('img2')[0].src='images/dice'+dice2+'.png';
	showResults(dice1,dice2);
	
}
function showResults(dice1,dice2){
	var result=document.getElementById('result');
if (dice1>dice2){
		result.innerHTML="player1 wins";
		document.getElementsByClassName('flag')[0].classList.remove("flag-hidden");
		document.getElementsByClassName('flag')[0].classList.remove("flag-right");
		document.getElementsByClassName('flag')[0].classList.add("flag-left");
		
	}else if(dice1<dice2){
		result.innerHTML="player2 wins";
		document.getElementsByClassName('flag')[0].classList.remove("flag-hidden");
		document.getElementsByClassName('flag')[0].classList.remove("flag-left");
		document.getElementsByClassName('flag')[0].classList.add("flag-right");
	}
	else{
		result.innerHTML="its a tie";
		document.getElementsByClassName('flag')[0].classList.add("flag-hidden");
	}
	
}
