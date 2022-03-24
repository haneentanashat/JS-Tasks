/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/
let haneenObj= {first: 'Haneen', last: 'Tanashat' , age: 22,dob: '08-06-1999',favorite_food: ["Fettuccine","Burger","Mushroom chicken"],favorite_movie: ["The fualt in our stars","V","Frozen","miracle in cell no 7","Spiderman"] };
console.log(haneenObj)

var persons = [
    { name: { firstName: 'John', lastName: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];
    
  /*
  2
  Using the varabile persons
  Create a function called firstName
  that accept an object
  and return all the first name of the person insides
  
  Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
  */
  console.log(firstName(persons))
  function firstName(fname)
  {
   let farr=[]
   let name=[]
   for(let i=0;i<fname.lenght;i++)
   {
   arr[i]=fname[i].name
     for(let j=0;j<fname.length;j++)
     {
         name[j]=farr[j].first
     }
   }
   return name
  }
  
  
  /*
  3
  Using the varabile persons
  Create a function called averageAge
  that accept an object
  and return the average age of those persons
  
  Ex: averageAge(persons) => 41.2
  */
 
function Avg(arr){
  let sum=0
  for(let i=0; i<arr.length; i++){
    sum=sum+arr[i].age
  }
  return  sum/arr.length
}
console.log(Avg(persons))

  /*
  4
  Using the varabile persons
  Create a function called olderPerson
  that accept an object
  and return the full name of the older person
  
  Ex: olderPerson(persons) => "Soso Al-Amora"
  */
  function olderPerson(old) {
    let index = 0;
  for (i = 0; i < old.length ; i++)
   {

    if (old[i].age > old[index].age )
    {
        index = i
    }
   }
   return old[index].name.first+" "+ old[index].name.last ;
    
    }
  console.log(olderPerson(persons))
  
  
  /*
  5
  Using the varabile persons
  Create a function called longestName
  that accept an object
  and return the full name of the person have longest full name
  
  Ex: longestName(persons) => "Soso Al-Amora"
  */
 function longestName(long)
 {
    let index = 1;
         for (i = 0; i < long.length ; i++) 
         {
           if ((long[i].name.first + long[i].name.last).length > (long[index].name.first + long[index].name.last).length )
           {
               index = i
            }
           }
          return long[index].name.first+"  "+ long[index].name.last
 }
       console.log(longestName(persons))
 
  
  
  /*
  6
  Using the varabile persons
  Create a function called longestName
  that accept an object
  and return the full name of the person have longest full name
  
  Ex: longestName(persons) => "Soso Al-Amora"
  */
function longestName(long)
 {
    let index = 1;
         for (i = 0; i < long.length ; i++) 
         {
           if ((long[i].name.first + long[i].name.last).length > (long[index].name.first + long[index].name.last).length )
           {
               index = i
            }
           }
          return long[index].name.first+"  "+ long[index].name.last
 }
       console.log(longestName(persons))
  
  /*
  7
  Create a function called repeatWord
  that accept a string
  and return an object that represents how many times each word repeat
  ** no matter it is upper case or lower case
  ** Search on MDN about something can cut the string to words??
  
  Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
  => {
    my:1,
    name:2,
    is:1,
    alex:1,
    mercer:1,
    class:1,
    b:1,
    baba:1,
    mama:1,
    hello:3
  }
  */
  let repeat_word ="My name is alex mercer class name B baba mama hello Hello HELLO";
  function repeatWord(words) {
  
    let stringarr = words.split("  ");
    let arr=[];
    for (i = 0; i < stringarr.length; i++) {
      arr+= stringarr[i].toLowerCase();
    }
    return arr
  }
  console.log(repeatWord(repeat_word))
  
  
  
  /*
  8
  Create a function called repeatChar
  that accept a string
  and return an object that represents how many times each char repeat
  ** no matter it is upper case or lower case
  ** Search on MDN about something can cut the string to char??
  
  Ex: repeatChar("mamababatetacedo")
  => { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
  */
  function repeatChar(char){
    let counter=0;
    let obj=new Object()
    let string=char.split('')
    for(let i=0; i<string.length; i++){
      counter=0;
      for(let j=0; j<string.length; j++){
        if(string[i]===string[j]){
          counter++
        }
      }
      let repeat2=string[i]
      obj[repeat2]=counter
    }
    return obj
  }
  console.log(repeatChar("mamababatetacedo"))

  
  /*
  9
  Create a function called selectFromObject
  that accept an object and an array
  and return an object have the key that inside the array
  
  Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
  =>  {a: 1, cat: 3}
  */
  
  
  
  function selectFromObject(select,obj9){
    let selectobj=new Object()
    for(let i in select){
      for(let j=0; j<obj9.length;j++){
        if(i==obj9[j]){
          selectobj[i]=select[i]
        }
      }
    }
    return selectobj
  }
  console.log(selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']))
  