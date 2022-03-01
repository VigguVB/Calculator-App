var a = document.getElementById('maindisplay').innerText;
var numberFromMain = Number(a);
var b = document.getElementById('subdisplay').innerText;
var numberFromSub = Number(b);
function plus() {
    var a = document.getElementById('maindisplay').innerText;
    var numberFromMain = Number(a);
    var b = document.getElementById('subdisplay').innerText;
    var numberFromSub = Number(b);
    var symbol = document.getElementById('symboldisplay').innerText;
    document.getElementById('symboldisplay').innerText = '+';
    if (numberFromSub === 0) {
        document.getElementById('subdisplay').innerText = numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    } else if (symbol == "+") {
        document.getElementById('subdisplay').innerText = numberFromSub + numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    } else if (symbol == '-') {
        document.getElementById('subdisplay').innerText = numberFromSub - numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    } else if (symbol == 'x') {
        document.getElementById('subdisplay').innerText = numberFromSub * numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    } else if (symbol == '/') {
        document.getElementById('subdisplay').innerText = numberFromSub / numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    } else if (symbol == "=") {
        document.getElementById('subdisplay').innerText = numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    }


}

function minus() {
    var a = document.getElementById('maindisplay').innerText;
    var numberFromMain = Number(a);
    var b = document.getElementById('subdisplay').innerText;
    var numberFromSub = Number(b);
    var symbol = document.getElementById('symboldisplay').innerText;
    document.getElementById('symboldisplay').innerText = '-';
    if (numberFromSub === 0) {
        document.getElementById('subdisplay').innerText = numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    } else if (symbol == '-') {
        document.getElementById('subdisplay').innerText = numberFromSub - numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    } else if (symbol == "+") {
        document.getElementById('subdisplay').innerText = numberFromSub + numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    } else if (symbol == '/') {
        document.getElementById('subdisplay').innerText = numberFromSub / numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    } else if (symbol == 'x') {
        document.getElementById('subdisplay').innerText = numberFromSub * numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    } else if (symbol == "=") {
        document.getElementById('subdisplay').innerText = numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    }
}

function multiply() {
    var a = document.getElementById('maindisplay').innerText;
    var numberFromMain = Number(a);
    var b = document.getElementById('subdisplay').innerText;
    var numberFromSub = Number(b);
    var symbol = document.getElementById('symboldisplay').innerText;
    document.getElementById('symboldisplay').innerText = 'x';
    if (numberFromSub === 0) {
        document.getElementById('subdisplay').innerText = numberFromMain;
        document.getElementById('maindisplay').innerText = "";
    } else if (symbol != "%" && numberFromMain === 0) {
        document.getElementById('subdisplay').innerText = 0;
        document.getElementById('maindisplay').innerText = 0;
    } else if (symbol == 'x') {
        document.getElementById('subdisplay').innerText = numberFromSub * numberFromMain;
        document.getElementById('maindisplay').innerText = '';
    } else if (symbol == 'x' && numberFromMain === 0 || numberFromSub === 0) {
        document.getElementById('maindisplay').innerText = 0;
        document.getElementById('subdisplay').innerText = 0;
    } else if (symbol == '/') {
        document.getElementById('subdisplay').innerText = numberFromSub / numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    } else if (symbol == '+') {
        document.getElementById('subdisplay').innerText = numberFromSub + numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    } else if (symbol == '-') {
        document.getElementById('subdisplay').innerText = numberFromSub - numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    } else if (symbol == "=") {
        document.getElementById('subdisplay').innerText = numberFromMain;
        document.getElementById('maindisplay').innerText = '';


    }
}
function divide() {
    var a = document.getElementById('maindisplay').innerText;
    var numberFromMain = Number(a);
    var b = document.getElementById('subdisplay').innerText;
    var numberFromSub = Number(b);
    var symbol = document.getElementById('symboldisplay').innerText;
    document.getElementById('symboldisplay').innerText = '/';
    if (numberFromSub === 0) {
        document.getElementById('subdisplay').innerText = numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    } else if (symbol == '/') {
        document.getElementById('subdisplay').innerText = numberFromSub / numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    } else if (symbol == 'x') {
        document.getElementById('subdisplay').innerText = numberFromSub * numberFromMain;
        document.getElementById('maindisplay').innerText = '';

    } else if (symbol == '+') {
        document.getElementById('subdisplay').innerText = numberFromSub + numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    } else if (symbol == '-') {
        document.getElementById('subdisplay').innerText = numberFromSub - numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    } else if (symbol == "=") {
        document.getElementById('subdisplay').innerText = numberFromMain;
        document.getElementById('maindisplay').innerText = ''
    }
}
function percentage() {
    var a = document.getElementById('maindisplay').innerText;
    var numberFromMain = Number(a);
    var b = document.getElementById('subdisplay').innerText;
    var numberFromSub = Number(b);
    var symbol = document.getElementById('symboldisplay').innerText;
    document.getElementById('symboldisplay').innerText = '%';


    document.getElementById('subdisplay').innerText = numberFromSub * numberFromMain / 100;
    document.getElementById('maindisplay').innerText = ''


}
function equals() {
    var a = document.getElementById('maindisplay').innerText;
    var numberFromMain = Number(a);
    var b = document.getElementById('subdisplay').innerText;
    var numberFromSub = Number(b);
    var symbol = document.getElementById('symboldisplay').innerText;
    document.getElementById('symboldisplay').innerText = '=';

    if (symbol == '+' && numberFromMain > 0) {
        document.getElementById('subdisplay').innerText = numberFromSub + numberFromMain;
        document.getElementById('maindisplay').innerText = "=" + numberFromSub;

    } else if (symbol == '-' && numberFromMain > 0) {
        document.getElementById('subdisplay').innerText = numberFromSub - numberFromMain;
        document.getElementById('maindisplay').innerText = "=" + numberFromSub;
    } else if (symbol == 'x' && numberFromMain !== 0) {
        document.getElementById('subdisplay').innerText = numberFromSub * numberFromMain;
        document.getElementById('maindisplay').innerText = "=" + numberFromSub;
    } else if (symbol == 'x' && numberFromMain === 0 || numberFromSub === 0) {
        document.getElementById('maindisplay').innerText = 0;
        document.getElementById('subdisplay').innerText = 0

    } else if (symbol == '/' && numberFromMain > 0) {
        document.getElementById('subdisplay').innerText = numberFromSub / numberFromMain;
        document.getElementById('maindisplay').innerText = "=" + numberFromSub;
    }

    var b = document.getElementById('subdisplay').innerText;
    var numberFromSub = Number(b);
    document.getElementById('maindisplay').innerText = numberFromSub;
}


function one() {

    document.getElementById('maindisplay').innerText += "1"
}
function two() {
    document.getElementById('maindisplay').innerText += "2"
}
function three() {
    document.getElementById('maindisplay').innerText += "3"
}
function four() {
    document.getElementById('maindisplay').innerText += "4"
}
function five() {
    document.getElementById('maindisplay').innerText += "5"
}
function six() {
    document.getElementById('maindisplay').innerText += "6"
}
function seven() {
    document.getElementById('maindisplay').innerText += "7"
}
function eight() {
    document.getElementById('maindisplay').innerText += "8"
}
function nine() {
    document.getElementById('maindisplay').innerText += "9"
}
function doublezero() {
    var a = document.getElementById('maindisplay').innerText;
    var includedecimal = a.includes(".")
    if (a !== "" || includedecimal) {
        document.getElementById('maindisplay').innerText += "00"
    }
}
function zero() {
    var a = document.getElementById('maindisplay').innerText;
    var numberFromMain = Number(a);
    var includedecimal = a.includes(".")
    if (a === "" || numberFromMain !== 0 || includedecimal) {
        document.getElementById('maindisplay').innerText += "0"
    }

}
function decimals() {
    var a = document.getElementById('maindisplay').innerText;
    var decimalIncluded = a.includes('.')
    if (!decimalIncluded) {
        document.getElementById('maindisplay').innerText += "."
    }

}
function ac() {
    document.getElementById('maindisplay').innerText = ""
    document.getElementById('subdisplay').innerText = 0;

}
function back() {
    var a = document.getElementById('maindisplay').innerText;
    var len = a.length;
    var freshlen = len - 1;
    var backed = a.slice(0, freshlen)
    document.getElementById('maindisplay').innerText = backed;

}