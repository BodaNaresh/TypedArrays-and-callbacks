//Hide
$(document).ready(function() {  
    $( "#button1" ).click(function() { 
        $( "#effect" ).hide();  
    });  
 });  

 //Show
 $(document).ready(function(){
     $( "#button2" ).click(function() {  
        $( "#effect" ).show();  
     });
})

//Toggle
$(document).ready(function(){
    $( "#button3" ).click(function() {  
       $( "#effect" ).toggle();  
    });
})

//Add/remove class
$(document).ready(function() {  
    $('.button').click(function() {  
       if (this.id == "add") {  
          $('#animTarget').addClass("myClass", "fast")  
       } else {  
       $('#animTarget').removeClass("myClass", "fast")  
       }  
    })  
 });  

 //switch
 $(function() {  
    $('#btnSwitch').click(function(){  
       $(".switchclass").switchClass("switchclass","LargeClass",'fast');  
       $(".LargeClass").switchClass("LargeClass","switchclass",'fast');  
       return false;  
    });  
 });  

 //Toggle Animation
 $(function() {  
    var state = true;  
    $( "#button4" ).click(function() {  
      if ( state ) {  
        $( "#effect" ).animate({  
          backgroundColor: "#aa0000",  
          color: "#fff",  
          width: 500  
        }, 1000 );  
      } else {  
        $( "#effect" ).animate({  
          backgroundColor: "#fff",  
          color: "#000",  
          width: 240  
        }, 1000 );  
      }  
      state = !state;  
    });  
  });  

  //Effect
  $(document).ready(function() {  
    $('#box').click(function() {  
       $( "#box" ).effect({  
          effect: "explode",  
          easing: "easeInExpo",  
          pieces: 20,  
          duration: 2000  
       });  
    });  
 });  