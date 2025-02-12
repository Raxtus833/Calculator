var currentNumber = 1;
var num1;
var num2;

var $screen = $("#screen");
var $number = $(".number");

//when someone clicks on a number, it
//saves the number to do the math

$number.on('click', function () {
    var numberPressed = $(this).html();
    $screen.append(numberPressed);

if (currentNumber == 1) {
    if (num1 == null) {
        num1 = numberPressed;
    } else{
        num1 = num1 + numberPressed;
    }
}
if (currentNumber == 2) {
    if (num2 == null) {
        num2 = numberPressed;
    } else{
        num2 = num2 + numberPressed;
    }
   }
});

/*
document.getElementById("num1").onclick = function write1()
    {
        $screen.append(1);
    }
document.getElementById("num2").onclick = function write2()
    {
        $screen.append(2);
    }
document.getElementById("num3").onclick = function write3()
{
        $screen.append(3);
}
document.getElementById("num4").onclick = function write4()
    {
        $screen.append(4);
    }
document.getElementById("num5").onclick = function write5()
    {
        $screen.append(5);
    }
document.getElementById("num6").onclick = function write6()
    {
        $screen.append(6);
    }
document.getElementById("num7").onclick = function write7()
    {
        $screen.append(7);
    }
document.getElementById("num8").onclick = function write8()
    {
        $screen.append(8);
    }
document.getElementById("num9").onclick = function write9()
    {
        $screen.append(9);
    }
document.getElementById("num0").onclick = function write0()
    {
        $screen.append(0);
    }
    */
 $("#plus").on('click', function()
    {
        $screen.append("+");
        op = "+";
        currentNumber++;
    });
    $("#minus").on('click', function()
    {
        $screen.append("-");
        op = "-";
        currentNumber++;
    });
    $("#divide").on('click', function()
    {
        $screen.append("÷");
        op = "/";
        currentNumber++;
    });
    $("#multiply").on('click', function()
    {
        $screen.append("⋅");
        op = "x";
        currentNumber++;
    });
    $("#clear").on('click', function()
    {
        $screen.empty();
        num1 = null;
        num2 = null;
        currentNumber = 1;
    });
    $("#equal").on('click', function()
    {
        $screen.append("=");
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        console.log(num1, op, num2);
        if (op == "+") {
            answer = num1 + num2;
        }
        if (op == "-") {
            answer = num1 - num2;
        }
        if (op == "*") {
            answer = num1 * num2;
        }
        if (op == "/") {
            answer = num1 / num2;
        }
    });



