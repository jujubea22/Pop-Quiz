const startButton = document.getElementById('start-btn')
const questionContainerElement=document.getElementById('question-container')

const startingSeconds = 60;
const countElement = document.getElementById('countdown')

function updateCountdown(){
    time--;
    const minutes =Math.floor(time / 60);
}

startButton.addEventListener('Click', startGame)

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
}

function setNextQuestion(){
next-btn = getNextquestion
console.log('next');
}

function selectAnswer(){

}


function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonElement.removeChild

    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [ 
    {
    question: 'What does HTML stand for?'
    answer: [
        {text: '', correct:true},
        {text: '', correct:false},
        {text: '', correct:false},
        {text: '', correct:false},
    ]
    }
