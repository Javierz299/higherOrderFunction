'use strict';

function repeat(fn,n){
  for(let i = 0; i < n; i++){
    console.log(fn());
  }
 
}

function hello(){
  console.log('Hello world');
}

function goodBye(){
  console.log('Goodbye world');
}
//repeat(goodBye,5);
//repeat(hello,5);


const myNames = ['Rich','Joe','Bhaumk','Ray'];
//////////////////fn = function(name) => fn(parameter)
function filter(arr,fn){
  let newArray = [];

  arr.filter(el => {
  //el[0] === 'R' .log(el[0]) => R,J,B,R
    //console.log(el[0]);
    if(fn(el)){ //fuction(name) => function(el)
      //console.log(el);
      newArray.push(el);
    }
  });
  return newArray;

  
}
// eslint-disable-next-line indent
                                    ////function(parameter)
const filteredNames = filter(myNames, function(name) {

  return name[0] === 'R';
  
});
console.log(filteredNames); // => ['Rich', 'Ray']