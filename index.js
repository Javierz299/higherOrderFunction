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


const danceMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function twoStep(arr){
  let toTheRight = [];
  let ambiTurner = [];
  let total = [];

  arr.filter(moveSet => {
    if(moveSet[0] < 0 || moveSet[1] < 0){
      toTheRight.push(moveSet);
    } else {
      ambiTurner.push(moveSet);
    }
  });

  ambiTurner.map(steps => {
    total.push(steps[0] + steps[1]);
  });

  total.forEach(move => {
    if(total[0] === move){
      console.log(`Movement #1: ${move} steps`);
    } else if(total[1] === move){
      console.log(`Movement #2: ${move} steps`);
    } else if(total[2] === move){
      console.log(`Movement #3: ${move} steps`);
    } 


  });
  console.log(total);
  console.log(ambiTurner);
}

//twoStep(danceMoves);



let codedMessage = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

function decode(string){
  let arr = string.split(' ');

  
  arr.reduce((acc,str) => {

    if(str.length === 3){
      console.log(acc + ' ' + str);
    } else {
      console.log(str[str.length - 1].toUpperCase());
    }
    
  }, '');
  

}

decode(codedMessage);