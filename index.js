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
repeat(goodBye,5);
//repeat(hello,5);