//comChoice keeps resetting to 0 when orb is clicked
// This code makes sure that the JavaScript doesn't get run until the HTML is finished loading
$(document).ready(function(){
  //------NAME VARIABLES------
  var orb = {
    blue:
    {
    color: "blue",
    value: 0
    },
    gold:
    {
      color: "gold",
      value: 0
    },
    purple:
    {
      color: "purple",
      value: 0
    },
    white: 
    {
      color: "white",
      value: 0
    }
  }
  //keep score
  let userScore = 0;
  let comChoice = 0;
  let wins = 0;
  let losses = 0;

  //Links to orb sounds
  //var audioElement = document.createElement("audio");
  //audioElement.setAttribute("src", "Assets/");//finish auido gem sound element linking

  //on click of "orbs"
  //$(".orb-image").on("click", function(){
    
    //audioElement.play();//captain-planet;
    //keepScore();
  //})
  //------FUNCTIONS------
  //
  //startGame() will start and reset game parameters
  function startGame() {
    //computer number will be between 19 and 120;
    let comChoice = Math.floor(Math.random() * 120) + 19;
    
    let userScore = 0;
    //set value of each orb
    orb.blue.value = Math.floor(Math.random() * 12) + 1;
    orb.gold.value = Math.floor(Math.random() * 12) + 1;
    orb.purple.value = Math.floor(Math.random() * 12) + 1;
    orb.white.value = Math.floor(Math.random() * 12) + 1;
    $("#user-total").text(userScore);
    $("#quest-number").text(comChoice);
    console.log("-------------------");
    console.log(userScore);
    console.log(comChoice);
    
  }
  //adding orb values to userScore
  //must do clicks, add values, check score
 // //var orbScore = function(){
 //    $("#blue_orb").on("click", function(){userScore += orb.blue.value;
 //      $("#user-total").html(userScore);
 //      console.log(userScore)
 //      console.log(comChoice)
 //      keepScore();
 //    })
 //    $("#gold_orb").on("click", function(){
 //      userScore += orb.gold.value;
 //      $("#user-total").html(userScore);
 //      keepScore();
 //    })
 //    $("#purple_orb").on("click", function(){userScore += orb.purple
 //      .value;
 //      $("#user-total").html(userScore);
 //      keepScore();
 //    })
 //    $("#white_orb").on("click", function(){userScore += orb.white.value;
 //      $("#user-total").html(userScore);
 //      keepScore();
 //    })
 //  };//orbScore

  //will determine wins and losses
  function keepScore(){
    if (userScore == comChoice){
      wins++;
      $("#wins").text(wins);
      alert("You win! Play again!"); 
      startGame();
    }
    else if(userScore > comChoice){
      losses++;
      $("#losses").text(losses);
      alert("You lose! Try again.")
      startGame();
    }
    //else{
      //orbScore();
    //}
  }

  //--------FUNC. EXECUTION---------
  
  startGame();
  $("#blue_orb").on("click", function(){userScore += orb.blue.value;
      $("#user-total").html(userScore);
      console.log(userScore)
      console.log(comChoice)
      keepScore();
    })
  $("#gold_orb").on("click", function(){
      userScore += orb.gold.value;
      $("#user-total").html(userScore);
      keepScore();
    })
    $("#purple_orb").on("click", function(){userScore += orb.purple
      .value;
      $("#user-total").html(userScore);
      keepScore();
    })
    $("#white_orb").on("click", function(){userScore += orb.white.value;
      $("#user-total").html(userScore);
      keepScore();
    })
  //orbScore();
  //keepScore();
})//end of document





//for (var i = 0; i < numberOptions.length; i++) {
  //  var imageOrb = $("<img>");//change to imageOrb
    //imageOrb.addClass("orb-space");
    
    // Each imageOrb will be given a data attribute called data-orbvalue.
    // This data attribute will be set equal to the array value.
   // imageOrb.attr("data-orbvalue", numberOptions[i]);

    // Lastly, each orb image (with all it classes and attributes) will get added to the page.
   // $("#orbs").append(imageOrb);
  //}
   
 