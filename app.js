// a program that let's the user input two numbers
// program divides inputOne by inputTwo
// program quotient answer

document.getElementById("Btn").addEventListener("click", submit);
function submit() {  
    var in1 = document.getElementById("inputOne").value;
    var in2 = document.getElementById("inputTwo").value;
    var x = in1 - in2;
    if (x < 0) {
        document.getElementById("demo").innerHTML = "The First Number must be larger than the Second Number!";
        return;
    }
    for (var i = 0; x > 0; i++ ) {
        x = x - in2;
    }
    var result = i + 1;
    var remainder = Number(in2) + x;
    console.log("the answer is " + result)
    console.log("The Remainder is " + remainder)
}

// document.getElementById("demo").innerHTML = x;


// function myFunction(){console.log("hello")};
// Object.onclick 
// function myFunction() {
//     document.getElementById("machine").submit();
//   }

// var userInput = [inputOne, inputTwo]



// for (var i = 0; i > 10; i++) {
//     document.getElementbyID
// }