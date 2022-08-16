//copywithin
var arr= [1,2,3,4,5,6,7,8,9,10];   
arr.copyWithin(2);
document.write(arr+"<br/>")
var arr1=["h","e","l","l","o"];
arr1.copyWithin(3);
document.write(arr1+"<br/>");

//entries
var Fruits = ['apple','mango','banana','orange'];  
var fruit = Fruits.entries();  
for (let f of fruit) {  
document.write(f+"<br>");   
}  

//every
var num = [200,100,450,700,900];  
function Demo(n)  
{  
return n/100;  
}  
document.write(num.every(Demo)+"<br>");   

//Fill method
var cities=['hyd','mumbai','delhi','bangalore'];
cities.fill('h');
document.write(cities+"<br>");

var nums=[1,2,3,4,5,56,6];
document.write(nums.fill(10)+"<br>");

//filter method
var options=[100,200,40,53,76];
function opt(n){
    return n>76
}
document.write(options.filter(opt)+"<br>");

//find method
function output(value)  
{  
return value >8 && value<14;  
}  
var array = [6,5,4,3,2,8,9,12,11,14];  
var result = array.find(output);  
document.write(result+"<br>")   
//findindex
function output1(value)  
{  
return value == 14 
} 
var result1=array.findIndex(output1);
document.write(result1+"<br>");

//foreach
var courses=['c#','java','c','Angular','React'];
courses.forEach(function(item){
    document.write(item);
});

function calc(){

    var items=[1,3,5,6,8];
    var tobepushed=[];

    items.forEach(function(it){
        tobepushed.push(it*10);
    })
    document.write(tobepushed+"<br>");
}
calc();

//includes
var course=['c#','java','c','Angular','React'];
var x=course.includes('c');
document.write(x+"<br>");

//Map
var course1=['c#','java','c','Angular','React'];
var lenghts = course1.map(function(value,index,arr){
   var res=value.length;
   return res;
});
document.write(lenghts+"<br>");

//set
var buffer1 = new ArrayBuffer(8); 
var abc= new Uint8Array(buffer1);  
abc.set([123],2);
document.write(abc+"<br>");

//reduce
 var red=[2,456,78,99];
 let sum=red.reduce(function(pass,item){
    return pass+item;
 },0)
 document.write(sum+"<br>");


