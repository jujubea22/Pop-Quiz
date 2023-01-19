
  let highScore = document.getElementById("hs");
  let timer = document.getElementById("timer-text");
  let quizQuestion = document.getElementById("quiz-question");
  let buttonContainer = document.getElementById("quiz-button");
  let initialTextBox = document.getElementById("hs-textbox");
  let usernameButton = document.getElementById("username-button");
  let currentQuestion = -1;
  let userScore = 0;
  let timeLeft = 120;

  $('#startQuizButton').click(function(){

      {
          question: "Which program allows you to design pages (color, fonts etc)?", 
          answers; [{
              text: "JAVO", isCorrect: false
          }, {
              text: "RRTS", isCorrect: false
          }, {
              text: "HTML", isCorrect: false
          }, {
              text: "CSS", isCorrect: true
          }] 
      }

      {
          question: "What does CSS stand for?",
          answers; [{
              text: "Creative Styling Structures", isCorrect: false
          }, {
              text: "Copy Simple Sheets", isCorrect: false
          }, {
              text: "Cascading Style Sheets", isCorrect: true
          }, {
              text: "None of the above", isCorrect: false
          }] 
      }

      {
          question: "What is Javascript?",
          answers; [{
              text: "Does not exsist", isCorrect: false
          }, {
              text: "Connects the ease of scripting language with the poser of Unix network programming", isCorrect: false
          }, {
              text: "Art Designing", isCorrect: false
          }, {
              text: "is a scripting languages, primarily used on the Web", isCorrect: true
          }] 
      },    {
          question: "What do you use to add an image ",
          answers; [{
              text: "image scr =Images.jpg", isCorrect: true
          }, {
              text: "<img>", isCorrect: false
          }, {
              text: "add images:", isCorrect: false
          }, {
              text: "insert image", isCorrect: false
          }] 
      }, {
          question: " Where do you add styling for sites",
          answers; [{
              text: "Functions", isCorrect: false
          }, {
              text: "CSS", isCorrect: true
          }, {
              text: "Index.html", isCorrect: false
          }, {
              text: "Bootstrap", isCorrect: false
          }] 
      },   {
          question: "What type of bracket is used to indicate that a variable is an array?",
          answers; [{
              text: "( )", isCorrect: false
          }, {
              text: "{ }", isCorrect: false
          }, {
              text: "[ ]", isCorrect: true
          }, {
              text: "||", isCorrect: false
          }] 
      }, 

  function startQuiz(onclick) {
      userScore = 0;
      timeLeft = 110;
      // timer set to start for time given to complete the quiz
      let countdown = setInterval(function() {
          if(timeLeft <= -1) {
              clearInterval(countdown); 
              quizOver();  
          } else {
              document.getElementById("timer-text").innerText = "Time Left: " + timeLeft
          }
          timeLeft--;
      }, 1000);
      
      
      // hide intro
      document.getElementById("intro-box").setAttribute('style', 'display: none');
  
      // quiz questions 
      document.getElementById("quiz-container").setAttribute('style', 'display: block');
  
      nextQuestion();
      return false;
  
  }
  
  // Function for the questions
  function nextQuestion() {
      currentQuestion++;
      if(currentQuestion >= quiz.length) {
          quizExit();
      } else {
          let q = quiz[currentQuestion]
          document.getElementById("question-container").innerText = q.question;
  
          const e = document.getElementById("quiz-button"); 
          
          //  loop to loop through 
          let child = e.lastElementChild;
          while (child) {
          e.removeChild(child); 
          child = e.lastElementChild;
          }
          q.answers.forEach(addAnswerButton);
  
      };
  
  }
  
  // Function to add answer choice buttons to the questions
  function addAnswerButton(a) {
      let answerButton = document.createElement("Button");
      answerButton.innerText = a.text;
      answerButton.value = a.isCorrect; 
      answerButton.onclick = answerQuestion;
      document.getElementById("quiz-button").appendChild(answerButton);    
      
  }
  
  // function that if the question is answered correct or wrong
  function answerQuestion(event) {
      let correct = event.srcElement.value;
      
      if(correct == "true") {
          userScore++;
      } else {
          timeLeft -= 10;
  
      }
      
      showStatusMessage(correct); 
      nextQuestion(); 
      
  }
  
  function showStatusMessage(correct) {
      if(correct == "true") {
          document.getElementById("statusMessageA").innerText = "YES, That is Correct!"; 
      } else {
          document.getElementById("statusMessageA").innerText = "Sorry... that is not correct"; 
      };
  }
  
  function quizExit() {
      document.getElementById("quiz-container").setAttribute('style', 'display: none'); 
      document.getElementById("final-score").innerText = "Your Final Score is...: " + userScore + "/5"; 
      document.getElementById("quizExit-container").setAttribute('style', 'display: block'); 
      timeLeft = 0;
  
  }
  
  function saveUser() {
          usernameTextBox = document.getElementById("username-textbox");
  
  let saveUserScore = 
      {
      userHS userScore,
      userNameTextBox: userNameTextBox.value.trim()
  };
  
  let topScores = [];
  let scoresString = localStorage.getItem("userScores");
  
  if (scoresString == undefined || scoresString == null) {
      topScores = []
  } else {
      topScores = JSON.parse(scoresString);
  }
  
  topScores.push(saveUserScore);
  localStorage.setItem("userScores", JSON.stringify(topScores)); 
  
  tryAgain();
  
  }

  function tryAgain() {
      document.getElementById("quizExit-container").setAttribute('style', 'display: none');
      document.getElementById("return-container").setAttribute('style', 'display: block');
  
  }
  
  function getHS() {
      document.getElementById("hs-popup").setAttribute('style', 'display: block');
      document.getElementById("hs-list").innerHTML = "Score" ;
      let topScores = [];
      let scoresString = localStorage.getItem("userScores");

      if (scoresString !== undefined ||   scoresString !== null) {
          topScores = JSON.parse(scoresString);
  
          // for loop to loop through saves high scores 
          for(let i = 0; i < 10; i++) {
          if(i < topScores.length) {    
          document.getElementById("high-score-list").innerHTML += topScores[i].initialsEntered + " " + topScores[i].userHighScore.toString();
              }
          }
      } 
      
  }
  
 
