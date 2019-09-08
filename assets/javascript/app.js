$(document).ready(function() {
  //to hold the different questions and answers
  var options = [
    {
      question: "What is the fastest production motorcycle ever made?",
      choice: [
        "BMW S1000RR HP4",
        "Ducati Panigale 1199R",
        "Yamaha YZF-R1M",
        "Kawasaki Ninja H2R"
      ],
      answer: 3
      // add photo
    },
    {
      question: "What is the common gear count in a motorcycle?",
      choice: ["4", "7", "6", "10"],
      answer: 2
      // add photo
    },
    {
      question: "how many cc's are needed to be considered a litter bike?",
      choice: ["1000cc", "600cc", "300cc", "750cc"],
      answer: 0
      // add photo
    },
    {
      question: "what is a stoppie?",
      choice: [
        "popping the front tire of the ground",
        "lifting the rear tire in the air",
        "slam on breaks",
        "normal stop"
      ],
      answer: 1
      // add photo
    }
  ];
  // add var to hold values for functions and if statements
  var correct = 0;
  var wrong = 0;
  var unanswer = 0;
  var timer = 20;
  var intervalId;
  var userGuess = "";
  var running = false;
  var qCount = options.length;
  var pick;
  var index;
  var newArray = [];
  var holder = [];

  //reset
  $("#restart").hide();

  //start the game
  $("#start").on("click", function(){
      $("#start").hide();
      displayQuestions();
        runTimer();
        for( var i = 0; i < options.length; i++){
            holder.push(options[i]);
        }
  })

  // timer start
  function runTimer(){
      if (!running) {
          intervalId = setInterval(decrement, 1000);
          running = true;
      }
  }

  // timer count down
  function decrement(){
      $(".timer").text("Time remaining: " + timer );
      timer --;
      if (timer === 0){
          unanswer++;
          stop();
          $(".answers").text(" Time's up! the correct answer is: " + pick.choice[pick.answer] );
          
      }
  }

  // timer stop
  function stop(){
      running = false;
      clearInterval(intervalId);
  }

  //display question 
  function displayQuestions() {
	//generate random index in array
	index = Math.floor(Math.random()*options.length);
	pick = options[index];


		$(".questions").text("" + pick.question  );
		for(var i = 0; i < pick.choice.length; i++) {
			var userChoice = $("<div>");
			userChoice.addClass("answerchoice");
			userChoice.text(pick.choice[i]);
			userChoice.attr("data-guessvalue", i);
			$(".answers").append(userChoice);
		}
//}


    // function for right answers
    $(".answerchoice").on("click", function(){
        userGuess = parseInt($(this).attr("data-guessvalue"));
        if (userGuess === pick.answer) {
            stop();
            correct++;
            userGuess="";
            $(".answers").text("Correct!");
           
        } else{
            stop()
            wrong++;
            userGuess="";
            $(".answers").text("Wrong! The correct answer is: " + pick.choice[pick.answer] );
           
        }
    })
}


    



$("#restart").on("click", function() {
	$("#restart").hide();
	$(".answers").empty();
	$(".questions").empty();
	for(var i = 0; i < holder.length; i++) {
		options.push(holder[i]);
	}
	runTimer();
	

})



   
   
});



