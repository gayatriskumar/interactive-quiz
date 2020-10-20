var questions = [
    
    {
        question:"The series Friends is set in which city?",
        choices:['Los Angeles','New York City','Miami','Seattle'],
        correctAnswer:1
    },

    {
        question:" What pet did Ross own?",
        choices:['A dog named Keith','A rabbit called Lancelot','A monkey named Marcel','A lizard named Alistair'],
        correctAnswer:2
    },

    {
        question:"What’s the name of Joey’s penguin?",
        choices:['Snowflake','Waddle',' Huggsy','Bobber'],
        correctAnswer:2
    },

    {
        question:"What song is Phoebe best known for?",
        choices:['Smelly Cat','Smelly Dog','Smelly Rabbit','Smelly Worm'],
        correctAnswer:0
    },

    {
        question:"What job does Ross have?",
        choices:['Paleontologist','Artist','Photographer','Insurance salesman'],
        correctAnswer:0
    } 
  ];

  var currentQuestion =0;
  var correctAnswers=0;
  var quizOver  =false;

  $(document).ready(function() {
      displayCurrentQuestion();
      $(this).find(".quizMessage").hide();
      $(this).find(".nextButton").on("click",function () {
          if(!quizOver){
              value=$("input[type='radio']:checked").val();
              alert(value);
              if(value == undefined){
                $(document).find(".quizMessage").text("please select an answer");
                $(document).find(".quizMessage").show();
              }
              else{
                $(document).find(".quizMessage").hide();
                if(value == questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }
                currentQuestion++;
                if(currentQuestion < questions.length){
                    displayCurrentQuestion();
                }
                else{
                    displayScore();
                    $(document).find(".nextButton").text("play again");
                    quizOver =true;

                }
              }
            }else{
              quizOver=false;
              $(document).find(".nextButton").text("Next Question");
              resetQuiz();
              displayCurrentQuestion();
              hideScore();
          }

    });


});

function displayCurrentQuestion(){

    console.log("In display current question");

    var quest = questions[currentQuestion].question;
    var questionClass=$(document).find(".quizContainer > .question");
    var choiceClass=$(document).find(".quizContainer > .choiceList");
    var numChoices=questions[currentQuestion].choices.length;

    $(questionClass).text(quest);
    $(choiceClass).find("li").remove();
    var choice;
    for ( i=0 ; i< numChoices;i++) {
        choice=questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' +i+ ' name="dynradio"/>' +choice+ '</li>').appendTo(choiceClass);
    }
}

    function resetQuiz(){
        currentQuestion=0;
        correctAnswers=0;
        hideScore();
    }

    function displayScore() {
        $(document).find(".quizContainer > .result").text("You scored :"+ correctAnswers);
        $(document).find(".quizContainer > .result").show();
    }

    function hideScore() {
        $(document).find(".result").hide();
    }
        