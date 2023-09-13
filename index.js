
let randomnumber1=Math.floor(Math.random()*6)+1

let randomDiceImage="dice"+randomnumber1+".png"

let randomDice="images/"+randomDiceImage



document.querySelectorAll("img")[0].setAttribute("src",randomDice)


let randomnumber2=Math.floor(Math.random()*6)+1


document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomnumber2+".png");


if(randomnumber1>randomnumber2)
{
document.querySelector("h1").innerHTML="Player1 Wins"
}
else if(randomnumber2>randomnumber1)
{
    document.querySelector('h1').innerHTML="Player2 Wins"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}