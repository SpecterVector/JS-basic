console.log('hello');

// alert('Hey');

var a ='hhh';
console.log(a);
var  num=45;
console.log(num);


// var age= prompt('What is your age?');

// document.getElementById('xyz').innerHTML = age;

// var name=prompt('what is your name?');
// function greet(nameis)
// {
//     var result= 'hello ' + nameis;
//     console.log(result);
// }

// greet(name);


let fruit ='banana';
let morefruits ='banana \n apple';
console.log(morefruits.indexOf('ap'));

//Array methods

let fuiter= ['a','b','c'];
console.log(fuiter);
fuiter[3]='d';
fuiter[fuiter.length]='e';
console.log(fuiter);


fuiter.shift();  //remover first element of array
console.log(fuiter);
fuiter.unshift('1'); //add to the beginning of array
console.log(fuiter);


// sorting for array of alphabets and numbers

let alpha= ['b','c','a','d'];
console.log(alpha.sort());
let number=[5,2,1,6,89];
console.log(number.sort());  //ascending
console.log(number.sort(function(a,b){return b-a})); //descending

let emptyarray= new Array();
for(let num=0; num<10;num++)
{
    emptyarray.push(num);
}
console.log(emptyarray);

//objects
let stu=
{
first: 'abc',
second: 'bbb',
stuinf: function()
{
    return this.first + '\n' + this.second;
}
};

console.log(stu.second);
console.log(stu.stuinf());