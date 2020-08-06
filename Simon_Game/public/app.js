 // alert("hi");

 var buttoncolors =["red","blue","green","yellow"];
 var userclickedpattern=[];
 var gamepattern =[];
 var level=0;
 var i=-1;
 var j=-1;
 var count1=0;
 
 function nextsequence()
 {
 var randomnumber = Math.floor(Math.random()*4);
 
 var randomchosencolor = buttoncolors[randomnumber];
 
 gamepattern.push(randomchosencolor);
 i++;
 
 $("#"+randomchosencolor).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150);
 //alert(gamepattern.length);
 
 // var audio = new Audio("sounds/" + randomchosencolor + ".mp3");
 // audio.play();
 //play_audio(randomchosencolor);
 //document.getElementById('myAudio').play();
 }
 
 //nextsequence();
 
  $(".btn").click(function(){
    //console.log(userclickedpattern.length);
    var color_press = $(this).attr("id");
     userclickedpattern.push(color_press);
    j++;
    //console.log(userclickedpattern.length);
    play_audio(color_press);
    animate_press(color_press);
    var bool=buttonpress_insequence_check()
 
      if(bool)
      {
        count1++;
        if(count1 === gamepattern.length)
        {
         count1=0;
         nextsequence();
         level++;
         $("h1").text("Level "+ level);
         userclickedpattern=[];
         j=-1;
        }
      }
      else
      {
        $("h1").text("Game Over, Press Any Key to Restart");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $(".start").addClass("game-over");
        setTimeout(function(){
          $(".start").removeClass("game-over");
        },200);
      }
    // console.log(userclickedpattern);
  });
 
 // var name; not needed
  function play_audio(name)
  {
    switch (name) {
 
      case "red":
                 var audio = new Audio("sounds/red.mp3");
                 audio.play();
                 break;
 
     case "blue":
                 var audio = new Audio("sounds/blue.mp3");
                 audio.play();
                 break;
 
     case "green":
                 var audio = new Audio("sounds/green.mp3");
                 audio.play();
                 break;
 
     case "yellow":
                 var audio = new Audio("sounds/yellow.mp3");
                 audio.play();
                 break;
      default:
               console.log(name);
    }
 
  }
 // var button_color;
 
  function animate_press(button_color)
 {
   $("."+button_color).addClass("pressed");
 
    setTimeout(function(){
        $("."+button_color).removeClass("pressed");
    },100)
 
 }
 
 $(document).keypress(function(){
   level=0;
   i=-1;
   j=-1;
   count1=0;
   gamepattern=[];
   userclickedpattern=[];
   nextsequence();
   $("h1").text("Level "+ level);
 });
 
 function buttonpress_insequence_check()
 {
   var count=0;
   var m=0;
   for( m=0;m<=j;m++)
     {
         if(gamepattern[m] === userclickedpattern[m])
        {
         count++;
         }
     }
     if(count === j+1)
     {
       return true;
     }
     else
     return false;
 }
 