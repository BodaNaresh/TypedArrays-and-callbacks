var bit;
function sell(){
   bit= prompt("how many bit coins u want u sell");
   document.getElementById('demo').innerHTML="u selled bit coins "+bit;
}
function buy(){
    document.getElementById('demo1').innerHTML="u successfully buyed "+bit+" and the price is 20000";
}
var mybtn=document.getElementById('btn');
var mybtn1=document.getElementById('btn1');

mybtn.addEventListener("click",sell);
mybtn1.addEventListener("click",buy);

function convert(){
    var text=document.getElementById('txt').value;
    var values=text*123/1000;
    document.getElementById('convert').innerHTML=values+"bit coins";
    document.getElementById('txt').value="";
}
var cbtn=document.getElementById('btnn');
cbtn.addEventListener("click",convert);

var pay;
function makepayment(){
    pay= prompt("Enter the payment to buy the bit coins");
    document.getElementById('demo2').innerHTML="u have entered amt is "+pay;
}

function success(){
    document.getElementById('demo3').innerHTML="u have successfully payed amount"+pay;
}

var mybtn2=document.getElementById('btn2');
mybtn2.addEventListener("click",makepayment);
mybtn2.addEventListener("click",success);

