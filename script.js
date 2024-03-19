var number1 = document.querySelector("#number-one"); 
//  number1.innerHTML = "35";
var value1 = document.querySelector("#value-one");
//  value1.innerHTML = "36";
var number2 = document.querySelector("#number-two"); 
//  number2.innerHTML = "37";
var value2 = document.querySelector("#value-two");
//   value2.innerHTML = "38";

var image = document.querySelector(".ub img");

var player1 = 1;
var player2 = 2;
var val1 = 0;
var val2 = 0;
var active = player1;
var roll = document.querySelector(".dice #roll");
roll.addEventListener("click", function(){
    var random = Math.floor(Math.random()*6) + 1 ;
    var src = "./images/dice" + random + ".png";
    image.setAttribute("src",src)
    // console.log(random);
    // var val1 = value1.innerHTML;
    if( active == player1){
        val1 = val1 + random;
        value1.innerHTML = val1;
        if(random ==  1){
            val1 = 0;
            value1.innerHTML = val1;
            active = player2;
        }
    }
    else{
        val2 = val2 + random;
        value2.innerHTML = val2;
        
        if(random ==  1){
            val2 = 0;
            value2.innerHTML = val2;
            active = player1;
        }
    } 
    
    
})

var newGame = document.querySelector("#new");
console.log(newGame)
newGame.addEventListener("click",function(){
    number1.innerHTML = "0";
    number2.innerHTML = "0";
    value1.innerHTML = "0";
    value2.innerHTML = "0";
    image.setAttribute("src", "./images/dice0.png");
    val1 = 0;
    val2 = 0;
    hold1 = 0;
    hold2 = 0;
    hold.removeAttribute("disabled");
    roll.removeAttribute("disabled");
});

var hold1 = val1;
var hold2 = val2;
var hold = document.querySelector(".dice #hold")
hold.addEventListener("click", function(){
    
    console.log(hold1);
   
    console.log(hold2);

    if(active == player1){
        active = player2;
        hold1 = hold1 + val1;
        val1 = 0;
        value1.innerHTML= 0;
        
        number1.innerHTML = hold1;
        
        if(number1.innerHTML >= 20 ){
           
            document.querySelector(".ul h2").innerHTML = number1.innerHTML + "<br>Winner!";
            document.querySelector(".ur h2").innerHTML = number2.innerHTML + "<br>Loser!";
            hold.setAttribute("disabled", "true");
            roll.setAttribute("disabled", "true");
            image.setAttribute("src", "./images/win1.png");

        }
        else{
            image.setAttribute("src", "./images/dice0.png");
            document.querySelector(".ur").classList.toggle("passive");
            document.querySelector(".ul").classList.toggle("active");
        }
        
    }
    else{
        active = player1;
        hold2 = hold2 + val2;
        value2.innerHTML = 0;
        val2 = 0;
        number2.innerHTML = hold2;
        if(number2.innerHTML >= 20 ){
            
            document.querySelector(".ul h2").innerHTML = number1.innerHTML +"<br>Loser!";
            document.querySelector(".ur h2").innerHTML = number2.innerHTML +"<br>Winner!";
            hold.setAttribute("disabled", "true");
            roll.setAttribute("disabled", "true");
            image.setAttribute("src", "./images/win2.png");
        }
        else{
            image.setAttribute("src", "./images/dice0.png");
            document.querySelector(".ur").classList.toggle("passive")
            document.querySelector(".ul").classList.toggle("active")
        }
        
    }
})