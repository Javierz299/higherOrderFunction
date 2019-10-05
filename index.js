'use strict';
////////FUNCTION AS ARGUMENTS///////////
function repeat(fn,n){
  for(let i = 0; i < n; i++){
    fn();
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

///////////FUNCTIONS AS ARGUMENTS(2)/////////////

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
//console.log(filteredNames); // => ['Rich', 'Ray']



////////////FUNCTIONS AS RETURN VALUES//////////
function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  //const rocksWarning(arguement)
  return function(location){

    warningCounter++;
    let once = 'time';
    let multi = 'times';

    if( warningCounter === 1){
      console.log(`DANGER! There is a ${typeOfWarning} alert has triggered ${location}`);
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${once} today!`);
    } if( warningCounter > 1){
      console.log(`DANGER! There is a ${typeOfWarning} alert has triggered ${location}`);
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${multi} today!`);
    }
  };

}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const iceWarning = hazardWarningCreator('Black ice on the Road');
const floodWarnging = hazardWarningCreator('Flooding across Road');
//rocksWarning('Main St and Pacific Ave');
//rocksWarning('Centinela Ave and Olympic Blv');

//iceWarning('Hall RD and West');
//iceWarning('Hall RD and King');