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
//////////////////fn = function(name) => fn(arguement)
function filter(arr,fn){
  let newArray = [];//function(name)
  arr.filter(el => {
    if(fn(el)){
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