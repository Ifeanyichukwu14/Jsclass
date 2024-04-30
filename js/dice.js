
function dicegame() {
    let RandomNumber1 = (Math.random()*6)+1;
    let RandomNumber2 = (Math.random()*6)+1;

    let player1 = parseInt(RandomNumber1);
    let player2 = parseInt(RandomNumber2);

    // console.log(player1);
    // console.log(player2);

    // document.querySelector("#player1").innerHTML = player1;
    // document.querySelector("#player2").innerHTML = player2;

    document.querySelector(".img1").src = `images/dice-${player1}` + ".png";
    document.querySelector(".img2").src = `images/dice-${player2}` + ".png";



    if(player1 > player2){
        document.getElementById("result").innerHTML = "PLAYER 1 WIN";
    }
    else if(player2 > player1){
        document.getElementById("result").innerHTML = "PLAYER 2 WIN";
    }else{
        document.getElementById("result").innerHTML = "PLAYER DRAW"   
    }
}
const back = document.getElementById("dicegame");

function change(){
    let color = "#";
    for(let i = 0; i < 6; i++){
    color += Math.floor((Math.random()*16)).toString(16);    
    }
    return color;
}

function colorchange(){

    back.style.backgroundColor = change();
}