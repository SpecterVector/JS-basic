//Challenge 1

//age in days
function ageindays(){
var birthyear= prompt("year of birth?");
var ageindayss=(2020-birthyear)*365;
var h1=document.createElement("h1");
var textanswer=document.createTextNode('you are ' + ageindayss + ' days old');
h1.setAttribute('id','ageindays');
h1.appendChild(textanswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset()
{
    document.getElementById('ageindays').remove();
}


//Challenge 2

function generatecat(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-gen');
    image.src='C:/Users/KIIT/Pictures/paper.jpeg';
    div.appendChild(image);

}

//Challenge 3

function rpsgame(yourchoice){
console.log(yourchoice);
var humanchoice, botchoice;
humanchoice=yourchoice.id;
botchoice= numbertochoice(randomtorps());
console.log(botchoice);

results= decidewinner(humanchoice,botchoice);
console.log(results);
message=finalmessage(results);
console.log(message);
rpsfrontend(humanchoice,botchoice,message);

}

function randomtorps(){
    return Math.floor(Math.random()*3);
}

function numbertochoice(number){
    return ['rock','paper','scissors'][number];
}

function decidewinner(humanchoice,botchoice) {//typo possible
var rpsdatabase={
    'rock': {'scissors':1, 'rock': 0.5, 'paper':0},
    'paper': {'scissors':0, 'rock': 1, 'paper':0.5},
    'scissors': {'scissors':0.5, 'rock': 0, 'paper':1},
    }
var yourscore=rpsdatabase[humanchoice][botchoice];;
var botscore=rpsdatabase[botchoice][humanchoice];

return [yourscore,botscore];
}


function finalmessage([yourscore,botscore]){
    if(yourscore===0){
        return {'message': 'You lost','color':'red'}
    }
    else if(yourscore===0.5){
        return {'message': 'You tied','color':'yellow'}
    }
    else
    return {'message': 'You Won','color':'green'}
}


function rpsfrontend(humanchoice,botchoice,message){
    var imagesdatabase={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
//remove all present images

document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();

var humandiv= document.createElement('div');
var botdiv= document.createElement('div');
var msgdiv= document.createElement('div');
humandiv.innerHTML= "<img src='"+ imagesdatabase[humanchoice]+"' height=150 width=150 style='box-shadow: 0px 10px 5px rgba(0,243,0,0.7)'>"
botdiv.innerHTML= "<img src='"+ imagesdatabase[botchoice]+"' height=150 width=150 style='box-shadow: 0px 10px 5px rgba(243,37,0,0.7)'>"
msgdiv.innerHTML="<h1 style='color: "+ message['color'] + ";font-size: 60px;padding:60px;'>"+message['message']+"</h1>"
document.getElementById('flex-box-rps-div').appendChild(botdiv);
document.getElementById('flex-box-rps-div').appendChild(msgdiv);
document.getElementById('flex-box-rps-div').appendChild(humandiv);

}

function refreshdiv(){
    // document.getElementById('botdiv');
    // document.getElementById('msgdiv');
    // document.getElementById('humandiv').remove();
document.getElementById('flex-box-rps-div').innerHTML="<div id= 'flex-box-rps-div>";
// .innerHTML=document.getElementById('flex-box-rps-div');
// "<img src='"+ imagesdatabase[rock]+"' height=150 width=150 style='box-shadow: 0px 10px 5px rgba(0,243,0,0.7)'>"

}

// Challenge 4

var all_button= document.getElementsByTagName('button');
console.log(all_button) ;

var  copyall_button= [];
for(let i=0;i<all_button.length;i++ )
{
    copyall_button.push(all_button[i].classList[1]);
}

console.log(copyall_button);

function changecolor(btn_thing){
    console.log(btn_thing.value);
    if(btn_thing.value==='red'){
        buttonred();
    }
    else if(btn_thing.value==='green'){
        buttongreen();
    }
    else if(btn_thing.value==='yellow'){
        buttonyellow();
    }
    else if(btn_thing.value==='random'){
        buttonrandom();
    }
    else if(btn_thing.value==='reset'){
        buttonreset();
    }
}

function buttonred(){
    for(let i=0;i<all_button.length;i++)
    {
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-danger');
    }
}

function buttongreen(){
    for(let i=0;i<all_button.length;i++)
    {
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-success');
    }
}

function buttonyellow(){
    for(let i=0;i<all_button.length;i++)
    {
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-warning');
    }
}

function buttonreset(){
    for(let i=0;i<all_button.length;i++)
    {
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copyall_button[i]);
    }
}

function buttonrandom(){
    var choices= ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger'];
    for(let i=0;i<all_button.length;i++)
    {
        var randome= Math.floor(Math.random()*4)
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copyall_button[randome]);
    }
}


// Challenge 5

let bjgame={
    'you': {'scorespan': 'your-bj-result', 'div': '#your-box', 'score':0},
    'dealer': {'scorespan': 'dealer-bj-result', 'div': '#dealer-box', 'score':0},
    'cards': ['2','3','4','5','6','7','8','9','10','K','Q','J','A'],
    'cardsmap': {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isstand':false,
    'isturnover':false,
};

const YOU= bjgame['you'];
const DEALER= bjgame['dealer'];

const hitsound= new Audio('static/blackjack_assets/sounds/swish.m4a');
const winsound= new Audio('static/blackjack_assets/sounds/cash.mp3');
const lostound= new Audio('static/blackjack_assets/sounds/aww.mp3');

document.querySelector('#bj-hit-btn').addEventListener('click',blackjackhit);
document.querySelector('#bj-stand-btn').addEventListener('click',dealerlogic);
document.querySelector('#bj-deal-btn').addEventListener('click',bjdeal);


function blackjackhit()
{
    if(bjgame['isstand']===false){
    let card= randomcard();
    // console.log(card);
    showcard(card,YOU);
    updatescore(card,YOU);
    console.log(YOU['score']);
    showscore(YOU);
}
}


function randomcard()
{
    let randomindex=Math.floor(Math.random()*13);
    // console.log(randomindex);
    return bjgame['cards'][randomindex];
}

function showcard(card,activeplayer){
    if(activeplayer['score']<=21){
    let cardimage=document.createElement('img');
    cardimage.src=`static/blackjack_assets/images/${card}.png`;
    cardimage.width=60;
    document.querySelector(activeplayer['div']).appendChild(cardimage);
    hitsound.play();
    }
}

function bjdeal()
{
    if(bjgame['isturnover']===true){
        bjgame['isstand']=false;
        
    // showresult(computewinner());
    let yourimages= document.querySelector('#your-box').querySelectorAll('img');
    let dealerimages= document.querySelector('#dealer-box').querySelectorAll('img');    
    for(let i=0;i<yourimages.length;i++){
        yourimages[i].remove();
    }
    for(let i=0;i<dealerimages.length;i++){
        dealerimages[i].remove();
    }

    YOU['score']=0;
    DEALER['score']=0;
    document.getElementById(YOU['scorespan']).textContent = 0;
    document.getElementById(YOU['scorespan']).style.color = 'white';
    document.getElementById(DEALER['scorespan']).textContent = 0;
    document.getElementById(DEALER['scorespan']).style.color = 'white';
    document.getElementById('blackjack-result').textContent = "Lets Play";
    document.getElementById('blackjack-result').style.color ='black';
    bjgame['isturnover']=true;
}
}
function updatescore(card,activeplayer){
    if(card=='A'){
    //if adding 11 keeps me under 21, then add 11 else 1.
    if(activeplayer['score']+bjgame['cardsmap'][card][1] <=21){
        activeplayer['score']+=bjgame['cardsmap'][card][1]
    }
    else{
        activeplayer['score']+=bjgame['cardsmap'][card][0]
    }
}
else
    activeplayer['score']+= bjgame['cardsmap'][card];

}

function showscore(activeplayer){
    if(activeplayer['score']<=21){
    document.getElementById(activeplayer['scorespan']).textContent = activeplayer['score'];
 }
else{
    document.getElementById(activeplayer['scorespan']).textContent ="BUST";
    document.getElementById(activeplayer['scorespan']).style.color ='red';
 }
}

function sleep(ms){
    return new Promise(resolve=> setTimeout(resolve,ms));
}

async function dealerlogic(){
    bjgame['isstand']=true;

    while(DEALER['score']<16 && bjgame['isstand']===true){
    let card=randomcard();
    showcard(card,DEALER);
    updatescore(card,DEALER);
    showscore(DEALER);
    await sleep(1000);
}

    let winner=computewinner();
    bjgame['isturnover']=true;
    showresult(winner);
}

//compute winner and return who just won

function computewinner()
{
    let winner;

    if(YOU['score']<=21){
        if(YOU['score']>DEALER['score'] || DEALER['score']>21){
            console.log("YOU WON");
            bjgame['wins']++;
            winner=YOU;
        }
        else if(YOU['score']<DEALER['score']){
            console.log("YOU LOST");
            bjgame['losses']++;
            winner=DEALER;
        }
        else if(YOU['score']===DEALER['score']){
            console.log("DRAW");
            bjgame['draws']++;
        }
    }
    else if(YOU['score']>21 && DEALER['score']<=21){
        console.log("You lost");
        bjgame['losses']++;
        winner=DEALER;
    }
    else if(YOU['score']>21 && DEALER['score']>21){
        console.log("you drew");
        bjgame['draws']++;
    }

    console.log("winner is", winner);
    console.log(bjgame);
    return winner;
}

function showresult(winner){
    let message,messagecolor;

    if(bjgame['isturnover']===true){

    if(winner===YOU)
    {
        message="You won";
        messagecolor='green';
        winsound.play();
        document.querySelector('#wins').textContent=bjgame['wins'];
    }
    else if(winner===DEALER)
    {
        message="You lost";
        messagecolor='red';
        lostound.play();
        document.querySelector('#losses').textContent=bjgame['losses'];
    }
    else{
        message="You Drew !";
        messagecolor='teal';
        document.querySelector('#draws').textContent=bjgame['draws'];
    }
document.getElementById('blackjack-result').textContent= message;
document.getElementById('blackjack-result').style.color= messagecolor;
}
}