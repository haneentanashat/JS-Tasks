console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

document.write("Question #1 :"+"<br>");
 var arr1=[ 1, 7 ,9 , 45 ];
 var arr2=["Str", "alex","moh" ];
 var arr3=['the','fox', 'over', 'lazy', 'dog'];


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
document.write("Question #2 :"+"<br>");

var fruits=["Tomato","Banana","Watermelon"];
document.write("The index of Banana is :" + fruits.indexOf('Banana')+"<br>");
document.write("The index of Tomato is :" + fruits.indexOf('Tomato')+"<br>");
document.write("<br>");

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
document.write("Question #3 :"+"<br>");
const food=["Fettuccine","Burger","Mushroom chicken","Shawarma","Kabseh"];
document.write("Favorite Food"+food +"<br>");
const sport=["Running","Tennis","Volleyball","Football","basketball"];
document.write("Favorite Sports is :"+sport +"<br>");
const movie=["The fualt in our stars","V","Frozen","miracle in cell no 7","Spiderman"];
document.write("Favorite Movies is :"+movie +"<br>");

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
document.write("Question #4 :"+"<br>");
var farr = [1, 4 , 5];
function firstOfArray() {
   
    return farr[0];

}

document.write("The first element :"+firstOfArray()+"<br>");


/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
var larr=["t","u","g","x"];
document.write("Question #5 :"+"<br>");

function lastOfArray() {
   
    return larr[larr.length-1];

}

document.write("The last element :"+lastOfArray()+"<br>");
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = ["0","5","7","9"];
array.shift("0");
array.shift("5");
array.shift("7");
array.unshift("8");
array.unshift("6");
array.unshift("4");
array.unshift("3");
array.unshift("1");
array.push("10");
console.log(array);



/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array1 = ["0","5","7","9"];


array1.shift("0");

console.log(array);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
document.write("Question #8:"+"<br>");
let med1=[1,4,5];
let med2=["t","u","g","x"];
let medindex;

function middleOfArray(array)
{
    medindex=array.length/2;
    if(medindex %2 !=0) //odd array
    {
        return array[Math.floor(medindex)]

    }
    else //even array
    {
        return [array[medindex -1], array[Math.floor(medindex)]]

    }
}
document.write(middleOfArray(med1)+"<br>");
document.write(middleOfArray(med2)+"<br>");



/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
document.write("Question #9:"+"<br>");

let animals = [] ; 
animals[0]='zebra' ; animals[1]='elephant' ;
document.write(animals[0]+"<br>")
document.write(animals[1]+"<br>")

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
document.write("Question #10:"+"<br>");
var nums= [1,2,3,8,9]
function indexOfArray (num , index){
    arrindex = num[index]
    return arrindex;
}
document.write(indexOfArray(nums , 1)+"<br>")

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
document.write("Question #11:"+"<br>");
var nums= [1,2,3,8,9]
function arrayExceptLast (){
    let exceptArray = nums.slice(0, nums.length - 1)
    return exceptArray;
}

document.write(arrayExceptLast() +"<br>")

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
document.write("Question #12:"+"<br>");
var nums12= [1,2,3,8,9]
function addToEnd(add, num) 
{
    add.push(num)
    return add;
}

document.write(addToEnd(nums12,55)+ "<br>")


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*

13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
document.write("Question #13:"+"<br>");
var nums13= [1,2,3,8,9]
function sumArray(array)
{
    var i;
    var sum=0;
    
    for(i=0;i<array.length;i++)
    {
        sum+=array[i];
    }
    return sum

}
document.write(sumArray(nums13)+"<br>")
//while loop
var nums13= [1,2,3,8,9]
function sumArray(array)
{
    var i=0;
    var sum=0;
    while(i<array.length)
    {
        sum+=array[i];
        i++;
    }
    return sum 
}
document.write(sumArray(nums13)+"<br>")

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
document.write("Question #14:"+"<br>");
var nums14= [7,2,3,8,9]
function minInArray (array)
{    
    let min = array[0];
    for( let i = 1 ; i < array.length ; i++){
        if(array[i] < min )
        {
            min = array[i];
        }
    }
    return min 
}
  document.write(minInArray(nums14)+"<br>")
  //while 
  var nums= [5,0,3,8,9]
  function minInArray1 (array)
  {
      let i=1;
   let min= array[0];
  
          while ( i < array.Length)
              {
                  if (array[i] < min)
                  {
                  min = array[i];
                   }
                   i++ ;
              }
              return min
  }
    document.write(minInArray(nums)+"<br>")
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
document.write("Question #15:"+"<br>");

var nums15= [1,2,3,8,9]
function removeFromArray(array,value){
for(var i=0 ; i<array.length ; i++){
    if(array[i]==value){
        array.splice(i, 1);}
    }
    return array;
}
document.write(removeFromArray(nums15,8)+"<br>")
// while
var nums= [1,7,3,55,9]
function removeFromArray2(arr,value){
    var i = 0;
    while(i<arr.length)
    {
        if(arr[i]==value)
        {
            arr.splice(i, 1);
        }
        
        
    }
        return arr
}
    document.write(removeFromArray(nums,55)+"<br>")



/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
document.write("Question #16:"+"<br>");
var nums16= [1,2,3,8,9]
function oddArray(odd)
{
    for(let i=0;i<odd.length ; i++)
    {
        if(odd[i] % 2 == 0)
       {
            odd.splice(i , 1)
       }
    }
    return odd;
}
    document.write(oddArray(nums16)+"<br>")
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
document.write("Question #17:"+"<br>");
var nums17= [1,2,3,8,9]

function aveArray(avg)
{
    let avarage = 0;
    for(i=0 ; i < avg.length ; i++)
    {
        avarage += avg[i] / avg.length
    }
    return avarage
}
    document.write(aveArray(nums17)+"<br>")

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
document.write("Question #18:"+"<br>");
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
function shorterInArray(shortarr){
    let len = shortarr[0].length ;
    let short = shortarr[0] ;
    for (let i=1 ; i<shortarr.length ; i++){
        if(shortarr[i].length < len){
            short = shortarr[i];
            len = shortarr[i].length
        }
    }
    return short
}

document.write(shorterInArray(strings)+"<br>")


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
document.write("Question #18:"+"<br>");
var string= "alex mercer madrasa rashed2 emad hala"
function repeatChar(str,count){
    let repeat = 0 ;
    for (let i=0 ; i<str.length ; i++)
    {
        if (string[i].includes(count))
        {
            repeat++
        }


    }
    return repeat
}
document.write(repeatChar(string,"a")+"<br>")

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
document.write("Question #20:"+"<br>");
var strings20= ["alex","mercer","madrasa","rashed2","emad7","hala"]
function evenIndexOddLength(evod){
    let newArray =[];
    for(let i=0 ; i<evod.length ; i++){
        if(i % 2 == 0 && evod[i].length % 2 != 0){
            newArray.push(evod[i])
        }
    }
    return newArray
}
document.write(evenIndexOddLength(strings20)+"<br>")


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
document.write("Question #21:"+"<br>");
var nums21= [44, 5, 4, 3, 2, 10]

function powerElementIndex(number){
    var array21 = [];
    for(let i = 0 ; i < number.length;i++){
        array21[i] = Math.pow(number[i] , i);
    }
    return array21;
}
document.write(powerElementIndex(nums21)+"<br>")
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
document.write("Question #22:"+"<br>");
var nums22= [5,2,2,1,8,66,55,77,34,9,55,1]

function evenNumberEvenIndex(num){
    let array22 = [];

    for(let i = 0; i < num.length ; i++){   
        if(num[i] % 2 == 0 && i % 2 == 0){
            array22.push(num[i])
                   i++
        }
    }

    return array22;
}
document.write(evenNumberEvenIndex(nums22))