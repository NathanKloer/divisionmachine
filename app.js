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
    for (var i = 0; x > 0; i++) {
        x = x - in2;
    }
    var result = i;
    if (x == 0) {
        document.getElementById("machine").append("The Quotient is "+ (result + 1) + ". And there is no Remainder");
    } else {
        document.getElementById("machine").append("The Quotient is " + result + ". And the Remainder is " + (Number(in2) + x));
    }
}
