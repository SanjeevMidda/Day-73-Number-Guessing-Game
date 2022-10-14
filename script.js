let getAnswer = document.querySelector('.answer');
let result = document.querySelector('.result');

getAnswer.addEventListener('change', correct);

let randomNumberGenerated = randomNumber();

console.log(randomNumberGenerated);

function randomNumber(){
    return Math.floor(Math.random()*10 +1);

    }

function correct(){

    let userAnswer = getAnswer.value;
    
    if(userAnswer == randomNumberGenerated){
        result.innerHTML = "Correct!"
        result.style.color="blue";
    }else{
        result.innerHTML = "Incorrect";
        result.style.color="red";
    }
    
}



let circle = document.querySelector('.circle');
circle.addEventListener('click', replay)

function replay(){
    getAnswer.innerHTML="";
    randomNumberGenerated = randomNumber();
    console.log(randomNumberGenerated);

    result.innerHTML=" ";
    
}