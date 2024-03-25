// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.



// const numberToString = (dataEntered) => {
//   const inputData = document.getElementById("dataField")
//   let theData = inputData.value
//   console.log("****", theData)
//   let theString = theData.toString()
//   // return (theString)
//   document.getElementById("theAnswer").innerHTML = theString;
// }

const numberToString = (numbR) => {
  let stringR = numbR.toString()
  return stringR
  console.log(stringR)
}





// const stringToNumber = (dataEntered) => {
//   const inputData = document.getElementById("stringData")
//   let stringToConvert = inputData.value
//   // let convertedString = Number(stringToConvert)
//   let convertedString = Number(stringToConvert);
//   console.log("****", convertedString)
//   document.getElementById("theAnswer").innerHTML = convertedString

// }

// const stringToNumber = (theString) => {
//   let theNumber = theString.toNu
// }

// const testingType = (parem) => {
//   console.log(parem + " is data type: " + typeof parem)
// }

  const typeDetect = (dataEntered) => {
    const dataToDetect = document.getElementById("dataDetection")
    // let detectingTheData = 
    


    return typeDetect(dataEntered) 
    
    
  }
  
  //to do it the variable way, add let number = to line 41

// const stringToNumber = (dataEntered) => {
//   number(dataEntered)
//   return number
// } I was missing 'Number' being capitalized





// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String


  

  
// Write a JavaScript program that adds 2 numbers together.

const add = (numA, numB) => {
  const sum = numA + numB
  return sum
}




// Write a JavaScript program that runs only when 2 things are true.

const areBothTrue = (first, second) => {
  return Boolean(Boolean(first) && Boolean(second))
}



// Write a JavaScript program that runs when 1 of 2 things are true.

const areEitherTrue = (first, second) => {
  return Boolean(Boolean(first) || Boolean(second))
}



// Write a JavaScript program that runs when both things are not true.  

const areNeitherTrue = (first, second) => {
  return Boolean(!(Boolean(first) || Boolean(second)))
}

//// README!!! the above functions work within console and are simple to test within console. However, I didn't figure out how to make them work as they were written, so had to basically rewrite all the code... but the logic, obviously, is the same. 

function addNumbers() {
  const numberOne = parseFloat(document.getElementById("numberOne").value) || 0;
  const numberTwo = parseFloat(document.getElementById("numberTwo").value) || 0;
  const sum = numberOne + numberTwo;
  document.getElementById('sumGoesHere').textContent = sum

}

const bothTrue = () => {
  const first = document.getElementById("onFirst").value;
  const second = document.getElementById("onSecond").value;

  const result = !!first && !!second;
  // console.log(result);

  // return result;

  document.getElementById("answerHere").textContent = result;
}

const eitherTrue = () => {
  const first = document.getElementById("onFirst").value;
  const second = document.getElementById("onSecond").value;
  
  const result = !!first || !!second;
  document.getElementById("answerHere").textContent = result;
}

const neitherTrue = () => {
  const first = document.getElementById("onFirst").value;
  const second = document.getElementById("onSecond").value;
  const result = !(first || second);
  document.getElementById("answerHere").textContent = result;
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24

// const sumOfTwo = (numA, numB) => {
  
//   if ((typeof(numA) == 'number') && (typeof(numB) == 'number')) {
//     (numA + numB)
//     console.log(sum)
    
//   }
//   else {
//     console.log("One of them is not a number")
//   }
// }

const sumOfTwo = (numA, numB) => {

  if ((typeof(numA) === 'number') && (typeof(numB) === 'number')) {
    // (numA + numB)
    // return(numA + numB)
    // return 
    console.log("The sum is " + (numA + numB))

  }
  else {
    console.log("One of them is not a number")
  }
}



