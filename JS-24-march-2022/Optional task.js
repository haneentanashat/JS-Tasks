
/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/
let objectArray={firstName:"Moh",age:24};

function objectToArray(value){
    let obj = Object.keys(objectArray)
    let arr =[]
    for(let i =0 ; i<obj.length ; i++){
        arr.push(obj[i] , value[obj[i]])
    }
    return arr;
}
console.log(objectToArray(objectArray))
/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/
let arr=["firstName","Moh","age",24];
function arrayToObject(array){
    let toObject ={}
    for(let i =0 ; i<array.length;i+=2){
        toObject[array[i]]=array[i+1]
    }
    return toObject
}
console.log(arrayToObject(arr))

/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/
function onlyNumber(number){
    let find_number =Object.keys(number) 
    
    
    for(let i=0 ;i< find_number.length;i++){
        if(typeof number[find_number[i]]!="number"){
            delete number[find_number[i]]
        }
    }
    return number
}
console.log(onlyNumber(objectArray))


/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/
let obj13={firstName:"Moh",age:24,movies:[1,5,"string"]};
function onlyString(strings){
    let text =Object.keys(strings) 
    for(let i=0 ;i< text.length;i++){
        if(typeof strings[text[i]] !="string"){
            delete strings[text[i]]
        }
    }
    return strings
}

console.log(onlyString(obj13))

/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/

function onlyArray(arr14){
    let obj14={};
   
    for(let i in arr14){
        if(typeof arr14[i]=='object'){
            obj14[i]=arr14[i]
        }
    }
    return obj14
}
console.log(onlyArray(obj13))

/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/
objectKey={firstName:"Moh",age:24,movies:[1,5,"string"]};
function keysArray(obj15){
    let k =Object.keys(obj15)
    return k
}
console.log(keysArray(objectKey))


/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]

*/
let obj16={firstName:"Moh",age:24,movies:[1,5,"string"]};
function valuesArray(value){
    let v =Object.keys(value)
    let array16 = []

    for (let i = 0 ; i<v.length ; i++){
        array16.push(value[v[i]])
    }
    return array16;
}

console.log(valuesArray(obj16))

/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/
let obj={a:1,b:3,c:4};
delete obj.b
obj.a=4
obj.c=66
console.log(obj)
/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/
let obj18={a:1,b:2,c:3,d:4};
function objectLength(lObj){

    return Object.keys(lObj).length
}
console.log(objectLength(obj18))


/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even

Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/
let obj19={a:1, b:2, c:3, d:4};
function evenValue(obj){
    let even = Object.keys(obj)

    for(let i =0 ; i<even.length ; i+=2)
    {
        if(obj[i] % 2 != 0)
        {
        delete obj[even[i]]
        }
    }
    return obj
}
console.log(evenValue(obj19))

/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key

Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/
let obj20={car:1, school:2, monster:3, alexMercer:4};
function longestKey(obj){
    let long=Object.keys(obj)
    let arr20=long[0]

    for(let i=0 ;i< long.length;i++)
    {
        if(arr20.length < long[i].length){
            long=i;
        }
       
    }
    return arr20
}
console.log(longestKey(obj20))