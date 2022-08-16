//AsyncAwait and promise
let items=['apple','banana','mango','orange','kiwi'];
runasync=async function app(){
    for(let item of items){
        await new Promise(resolve=>{
            setTimeout(resolve,2000)
            document.write(item+"<br>");
        })
    }
}
//runasync();

//call back function
function greet(name, callback) {
    document.write('Hi' + ' ' + name+"<br>");
    callback();
}
function callMe() {
    document.write('I am callback function');
}
//greet('Naresh', callMe);

function happy(name) {
    alert('hello'+' '+name);
  }
  
  function Input(callback) {
    const name = prompt('Please enter your name.');
    callback(name);
  }
  
  //Input(happy);

//Anonymus function
var amount=function(P,T,R){
    return P*T*R/100;
}
let amt=amount(10000,3,230);
document.write("The total amount for the year is"+amt+"<br>");


