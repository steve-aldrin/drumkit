var randomnumber1=Math.round(Math.random()*(6-1)+1);
var randomnumber2=Math.round(Math.random()*(6-1)+1);

document.getElementsByTagName("img")[0].setAttribute("src","./images/dice"+randomnumber1+".png");
document.getElementsByTagName("img")[1].setAttribute("src","./images/dice"+randomnumber2+".png");

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}

if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
if(randomnumber1==randomnumber2){
    document.querySelector("h1").innerHTML="Draw";
}