var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

function addChocolates(chocolates, color, count) {
    if(count <= 0){
      return "Number cannot be zero/negative";
    }
    else{
      for(var i = 1; i <= count; i++){
        chocolates.push(color);
      }
    }
}

addChocolates(chocolates, color, count);


//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates, number) {
    if(number <= 0){
      return "Number cannot be zero/negative";
    }
    else if(number > chocolates.length){
      return "Insufficient chocolates in the dispenser";
    }
    else{
      var removedChocolates = chocolates.splice(0, number);
    }
  return removedChocolates;
}

console.log(removeChocolates(chocolates, number));


//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates, number) {
    if(number <= 0){
      return "Number cannot be zero/negative";
    }
    else if(number > chocolates.length){
      return "Insufficient chocolates in the dispenser";
    }
    else{
      var dispensedChocolates = chocolates.slice(-(number)).reverse();
      return dispensedChocolates;
    }
    
}

console.log(dispenseChocolates(chocolates, number));


//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates, number, color) {
  let dispensedChocolatesOfColor = [];
  var choice = 0;
  if (number > chocolates.length)
      return "Insufficient chocolates in the dispenser";
  if (number <= 0)
      return "Number cannot be zero/negative";
  for (var i = chocolates.length - 1; i >= 0; i--) {
      if (chocolates[i] == color) {
        dispensedChocolatesOfColor.push(chocolates.pop());
        choice++;
        if (choice == number)
            return dispensedChocolatesOfColor;
      }
  }
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]


function noOfChocolates(chocolates) {
    var green = 0;
    var silver = 0;
    var blue = 0;
    var crimson = 0;
    var purple = 0;
    var red = 0;
    var pink = 0;
    for(var i = 0; i < chocolates.length; i++){
      if(chocolates[i] == "green"){
        green = green + 1;
      }
      else if(chocolates[i] == "silver"){
        silver = silver + 1;
      }
      else if(chocolates[i] == "blue"){
        blue = blue + 1;
      }
      else if(chocolates[i] == "crimson"){
        crimson = crimson + 1;
      }
      else if(chocolates[i] == "purple"){
        purple = purple + 1;
      }
      else if(chocolates[i] == "red"){
        red = red + 1;
      }
      else {
        pink = pink + 1;
      }          
    }
  var chocolateCount = [green, silver, blue, crimson, purple, red, pink];
  return chocolateCount;
}



//Progression 6: Sort chocolates based on count in each color. Return array of colors


//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor) {
  var count = 0;
  if (number <= 0)
      return "Number cannot be zero/negative";
  else if (number > chocolates.length)
      return "Insufficient chocolates in the dispenser";
  else {
    for (var i = 0; i < chocolates.length; i++) {
      if (chocolates[i] == finalColor){
        return "Can't replace the same chocolates";
      }
      if (chocolates[i] == color) {
          chocolates[i] = finalColor;
          count++;
          if (count == number){
              return chocolates;
          }
      }    
    }  
  }
}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]




//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
