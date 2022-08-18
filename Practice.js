
//protottypes and spread operators
const user1 = {
    name: 'Jen',
    age: 22,
    city:'hyderabad'
};
 const user2={...user1}
 document.write(user2.name+" "+user2.city+" "+user2.age+"<br>");

//closure functions
const add = (()=> {
    let counter = 0;
    return ()=> {counter += 1; return counter;}
  })();
//add();
function plus(){
    document.getElementById('demo3').innerHTML=add();
}

function wish() {
    let value = "Hello Naresh";
    let func = function() 
    { 
        return value+"<br>";
    };
    return func;
  }
  //wish()(); 
  function get1(){
    document.getElementById('demo1').innerHTML=wish()();
}

  //recursive function
function countDown(number) {
    document.write(number);
    const newNumber = number - 1;
    if (newNumber > 0) {
        countDown(newNumber);
    }
}
//countDown(5);

function factorial(num){
    if(num === 1){
        return num;
    }
    else{
        return num * factorial(num-1) 
    }
}
function get(){
    document.getElementById('demo').innerHTML=factorial(5);
}

//arrow functions
$(document).ready(function(){
    $('#btn2').click(function(){
        document.getElementById("demo2").innerHTML =abc(55);
    })
})
var abc=(f)=>{
    return (5/9) * (f-32);
}


