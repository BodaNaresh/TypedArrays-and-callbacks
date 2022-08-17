  //Accordion
  $(function() {  
    $( "#accordion" ).accordion();  
  });  

  //Autocomplete
  $(function() {  
    var availableTags = [  
      "Hyderabad",  
      "Bangalore",  
      "mumbail",  
      "kolkata",  
      "chennai",  
      "kerala",  
      "tamilnadu",  
      "rajastan",  
      "noida",  
    ];  
    $( "#tags" ).autocomplete({  
      source: availableTags  
    });  
  });  
  
 //Date Picker
 $(function() {  
    $( "#dtp1" ).datepicker({  
       appendText:"(yy-mm-dd)",  
       dateFormat:"yy-mm-dd",  
       altField: "#dtp2",  
       altFormat: "DD, d MM, yy"  
    });  
 });  

 //Dialog
 $(function() {  
    $( "#dialog" ).dialog({  
       autoOpen: false,    
    });  
    $( "#opener" ).click(function() {  
       $( "#dialog" ).dialog( "open" );  
    });  
 });  

 //Menu 
 $(function() {  
    var menu = $("#menu").menu();  
    $( "#menu" ).menu("focus", null, $( "#menu" ).menu().find( ".ui-menu-item:last" ));  
    $(menu).mouseleave(function () {  
       menu.menu('collapseAll');  
    });  
 });  

 //Progress bar
 $(function() {  
    $( "#progressbar" ).progressbar({  
       value: 30  
    });  
 });  

 //select menu
 $(function() {  
    $( "#speed" ).selectmenu();  
   
    $( "#Bikes" ).selectmenu();  
   
    $( "#number" )  
      .selectmenu()  
      .selectmenu( "menuWidget" )  
        .addClass( "overflow" );  
  });  

  //Slider
  $(function() {  
    $( "#slider" ).slider();  
 }); 

 //Spinner
 $(function() {  
    $( "#spinner" ).spinner();  
 });  

 //Tabs
 $(function() {  
    $( "#tab1" ).tabs();  
 }); 

 //ToolTip
 $(function() {  
    $("#tooltip1").tooltip();  
    $("#tooltip2").tooltip();  
}); 