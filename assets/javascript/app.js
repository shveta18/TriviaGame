// time and countdown on clicking the start button

var clockRunning = false;
$("#start").on("click", start);
function start() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(counter, 1000);
      clockRunning = true;
    }
  }

var time;
var card = $("#game-display");

var game = {
    correct: 0,
    incorrect: 10,
    counter: 60,
    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
          console.log("TIME UP");
          game.done();
        }
      },
    
      start: function() {
        timer = setInterval(game.countdown, 1000);
    
        $("#quiz-questions").prepend(
          "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
        );
    
        $("#start").remove();
    
        for (var i = 0; i < quiz.length; i++) {
          card.append("<h2>" + quiz[i].question + "</h2>");
          for (var j = 0; j < quiz[i].answers.length; j++) {
            card.append("<input type='radio' name='question-" + i +
              "' value='" + quiz[i].answers[j] + "''>" + quiz[i].answers[j]);
          }
        }
    
        card.append("<button id='done'>Done</button>");
      },
    
      done: function() {
        var inputs = card.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
          if ($(inputs[i]).val() === quiz[i].correctAnswer) {
            game.correct++;
          } else {
            game.incorrect++;
          }
        }
        this.result();
      },
    
      result: function() {
        clearInterval(timer);
    
        $("#sub-wrapper h2").remove();
    
        card.html("<h2>All Done!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
      }
    };


//Quiz
var quiz = [
    {
      question: "Who directed LOTR?",
      answers: ["Peter Jackson", "Steven Speilberg.", "Quentin Tarantino", "Guillermo Del Torro"],
      correctAnswer: "Peter Jackson"
    },
    {
        question: "Boromir died saving who?",
        answers: ["Hobbits", "Elrond", "The ring", "Galadriel"],
        correctAnswer: "Hobbits"
      },
      {
        question: "Aragorn was the descendent of which race",
        answers: ["Dunedein", "Elves", "Hobbits", "Dwarves"],
        correctAnswer: "Dunedein"
      },
      {
        question: "Which dwarf family did Gimli belong to? ",
        answers: ["Dunedein", "Elves", "Gloin", "Orin"],
        correctAnswer: "Gloin"
      },
      {
        question: "What is the superpower of elves?",
        answers: ["Live forever", "Can see great distances", "Can hear whispers", "All of these"],
        correctAnswer: "All of these"
      }

]

$(document).on("click", "#start", function() {
    game.start();
  });
  
  $(document).on("click", "#done", function() {
    game.done();
  });