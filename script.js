// question section

var questions = [
    { title: "Which program allows you to design pages (color, fonts etc)?",
        choices: ["1. Javo", "2. RRTS", "3. HTML", "4. CSS"],
        answer: "4. css"},


    {title: "What does CSS stand for?",
        choices: ["1. Creative Styling Structures", "2. Copy Simple Sheets", "3. Cascading Style Sheets", "D. None of the Above"],
        answer: "3. Cascading Style Sheets" },



    { title: "What is JAVA Script?",
        choices: ["1. Does not exsist", "2.  connects the ease of a scripting language with the power of Unix network programming.", "3. Art desiging", "4. is a scripting languages, primarily used on the Web"], 
        answer: "4. is a scripting languages, primarily used on the Web   },



    {  title: "What do you use to add an image ",
        choices: ["1. <image scr "Images.jpg" ", "2. <img>", "3. Add images:", "4. insert image: ' ' "],
        answer: "1. <image scr "Images.jpg" "},

    {title: "What file gives instructions?:",
        choices: ["1. index", "2. README", "3. script.js", "D. style.css"],
        answer: "2. README" },
  ];

//timer 
  var score = 0;
  var questionIndex = 0;
  var absoluteTime = document.querySelector("#timer");
  var timer = document.querySelector("#startTimer");
  var questionsDiv = document.querySelector("#questions");
  var container = document.querySelector("#container");
// timer
  var secondsLeft = 50;
  var sameCost = 0;
  var cost = 5;

  var divNew = document.createElement("div");
  
  timer.addEventListener("click", function () {
    if (sameCost === 0) {
        sameCost = setInterval(function () {
            secondsLeft--;
            absoluteTime.textContent = "Time: " + secondsLeft;
  
            if (secondsLeft <= 0) {
                clearInterval(sameCost);
                allDone();
                absoluteTime.textContent = "Time is up!";
            }
        }, 1000);
    }
    render(questionIndex);
  });
  
  function render(questionIndex) {
    questionsDiv.innerHTML = "";
    divNew.innerHTML = "";
  
    for (var i = 0; i < questions.length; i++) {
        var playerQuestion = questions[questionIndex].title;
        var playerChoices = questions[questionIndex].choices;
        questionsDiv.textContent = playerQuestion;
    }
   
    playerChoices.forEach(function (newItem) {
        var listItem = document.createElement("button");
        listItem.textContent = newItem;
        questionsDiv.appendChild(divNew);
        divNew.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
  } function compare(event) {
    var element = event.target;
  
    if (element.matches("button")) {
  
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
      
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer was:  " + questions[questionIndex].answer;
        } else {
          
            secondsLeft = secondsLeft - cost;
            createDiv.textContent = "Ops! That was not correct... The correct answer is:  " + questions[questionIndex].answer;}
  
    }
    // active question
    questionIndex++;
  
    if (questionIndex >= questions.length) {
        allDone();
        createDiv.textContent = "Scooby dooby dooo, thanks for taking this POP quiz!" + " " + "You scored " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);}
  
// result of quiz and user name 
  function allDone() {
    questionsDiv.innerHTML = "";
    absoluteTime.innerHTML = "";
  
    
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"
  
    questionsDiv.appendChild(createH1);
  
   
    var newText = document.createElement("p");
    newText.setAttribute("id", "newText");
  
    questionsDiv.appendChild(newText);
  
    //  time remaining
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var newText2 = document.createElement("p");
        clearInterval(sameCost);
        newText.textContent = "Final score is: " + timeRemaining;
  
        questionsDiv.appendChild(newText2);  }
  

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";
  
    questionsDiv.appendChild(createLabel);
  
 
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";
  
    questionsDiv.appendChild(createInput);
  
    
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";
  
    questionsDiv.appendChild(createSubmit);
  
  // listener to hold/capture/store info 
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;
  
        if (initials === null) {
  
            console.log("No value entered!");
  
        } else {
            var endScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(endScore);
            var totalScores = localStorage.getItem("totalScores");
            if (totalScores === null) {
                totalScores = [];
            } else {
                totalScores = JSON.parse(totalScores);
            }
            totalScores.push(endScore);
            var newScore = JSON.stringify(totalScores);
            localStorage.setItem("totalScores", newScore);
            window.location.replace("./scores.html");
        }
    });
  
  }
