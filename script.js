//const a=1;
//const b=2;
//result=a+b;
//console.log(result)

let car = "volvo",
year = 2025,
type = null
console.log(car,year,type)

let a ="harry",
 b ="10",
type = null
console.log(typeof(a))
console.log(typeof(b))

let fruits=["mango,apple,orange"];
console.log(fruits)
let student =
{
    name: "sejal",
    age: 19,
    course: "computer science",
    isEnrolled: true 
}
console.log(student);

let x= 2;
console.log("addition : x+3 =",x+3)
console.log("subtraction: x-3=",x-3)
console.log("multiplication: x*3=",x*3)
console.log("power: x**3 =",x**3)
//console.log("increment: x++3 = ",x++3)
//console.log("decrement: x--3 =",x--3)
console.log("division: x/3 =",x/3)
console.log("percentage: x%3 = ",x%3)
let y=2;
y++
z=y;
console.log(z)

let x=3;
console.log((x < 5) && (x > 0));
console.log((x < 5) && (x > 6));

console.log((x > 2) || (x > 5 ));
console.log((x > 3)||(x < 0));

console.log((!(x==3)));
console.log((x < 2));

let age = 18;
let text = "you can not drive!";

if(age>=18)
{
    text="you can drive";
}
console.log(text);
let hour = 3;

if(hour < 12)
{
    greeting="good morning";
}
else
{
    greeting="good day";
}
console.log(greeting);

let marks = 50;

if (marks >= 90) 
{
    console.log("Grade A");
}
else if (marks >= 75) 
{
    console.log("Grade B");
}
else if (marks >= 50) 
{
    console.log("Grade C");
} 
else
{
    console.log("Grade F");
}

console.log("Marks:", marks);

let trafficlight="yellow";
let message=""

switch(trafficlight)
{
    case "red":
    message="stop imediatly";
    break;
    case "yellow":
    message="prepare to go";
    break;
    case "green":
    message="continue driving";
    break;
    default:
    message="invaild traffic color";
    
}
console.log(message)


let day="4";
let message=""

switch(day)
{
    case "1":
    message="sunday";
    break;
    case "2":
    message="monday";
    break;
    case "3":
    message="tuesday";
    break;
    case "4":
    message="wednesday";
    break;
    case "5":
    message="thursday";
    break;
    case "6":
    message="friday";
    default:
    message="invaild day";
    
}
console.log(message)

for(let i=0;i<6;i++)
console.log(i)

let num=0;
while (num<=20)
{
    console.log(num);
    num++;
}

// odd numbers
let num=1;
while (num<=20)
{
    console.log(num);
    num+=2;
}

/// even numbers
let num=0;
while (num<=20)
{
    console.log(num);
    num+=2;
}

// do while loop
let i=5;
do
{
    console.log(i);
    i--;
}
while (i >0)