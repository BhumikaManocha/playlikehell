window.onload = function(){
    var max = 6;
    var min = 1;
    var score1 = 0;
    var score2 = 0;
    var dice = document.getElementById("dice");
    var reset = document.getElementById("reset");
    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2"); 
    var win1 = document.getElementById("win1"); 
    var win2 = document.getElementById("win2"); 
    let flag = 0;


    dice1.style.display = 'block';
    dice2.style.display = 'none';
    dice3.style.display = 'none';
    dice4.style.display = 'none';
    dice5.style.display = 'none';
    dice6.style.display = 'none';

    win1.style.display = 'none';
    win2.style.display = 'none';


    dice.onclick= function onclickfunc() {
                let no = (Math.floor(Math.random()*(max-min+1)+min));
                console.log("no : " + no);

                if(no == 1){
                    dice1.style.display = 'block';
                    dice2.style.display = 'none';
                    dice3.style.display = 'none';
                    dice4.style.display = 'none';
                    dice5.style.display = 'none';
                    dice6.style.display = 'none';
                }
                if(no == 2){
                    dice1.style.display = 'none';
                    dice2.style.display = 'block';
                    dice3.style.display = 'none';
                    dice4.style.display = 'none';
                    dice5.style.display = 'none';
                    dice6.style.display = 'none';
                }
                if(no == 3){
                    dice1.style.display = 'none';
                    dice2.style.display = 'none';
                    dice3.style.display = 'block';
                    dice4.style.display = 'none';
                    dice5.style.display = 'none';
                    dice6.style.display = 'none';
                }
                if(no == 4){
                    dice1.style.display = 'none';
                    dice2.style.display = 'none';
                    dice3.style.display = 'none';
                    dice4.style.display = 'block';
                    dice5.style.display = 'none';
                    dice6.style.display = 'none';
                }
                if(no == 5){
                    dice1.style.display = 'none';
                    dice2.style.display = 'none';
                    dice3.style.display = 'none';
                    dice4.style.display = 'none';
                    dice5.style.display = 'block';
                    dice6.style.display = 'none';
                }
                if(no == 6){
                    dice1.style.display = 'none';
                    dice2.style.display = 'none';
                    dice3.style.display = 'none';
                    dice4.style.display = 'none';
                    dice5.style.display = 'none';
                    dice6.style.display = 'block';
                }


                if(flag%2 == 0){
                    // var player1 = document.getElementById("player1");
                       ///     player1.setAttribute("type","number");
                          //  var noo = Number(no);
                    score1 +=no;
                    document.getElementById("player1").textContent = score1;
                    console.log("score1 : " + score1);
                    // let sum = player1.reduce(function(acc,item){
                    //     return acc+item;
                    // })
                    // document.getElementById("player1").innerHTML = sum;
                    flag++;
                    console.log("flag:"+flag);
                }

                else{
                     score2 += no;
                    document.getElementById("player2").textContent = score2;
                    console.log("score2 : " + score2);
                    flag++;
                    console.log("flag:"+flag);
                }

                if(score1>=20)
                {
                    console.log("player 1 won!")
                    win1.style.display = 'block';
                }

                else if(score2>=20)
                {
                    console.log("player 2 won!")
                    win2.style.display = 'block';
                }


            }
    reset.onclick= function onclickfunc() {
            document.getElementById("player1").textContent = 0;
            document.getElementById("player2").textContent = 0;
            score1=0;
            score2=0;
            flag=0;
            dice1.style.display = 'block';
            dice2.style.display = 'none';
            dice3.style.display = 'none';
            dice4.style.display = 'none';
            dice5.style.display = 'none';
            dice6.style.display = 'none'; 
            win1.style.display = 'none';
            win2.style.display = 'none';  
    }
           
}