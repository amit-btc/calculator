/* All calculator operations are written in this file.It uses Strict Mode Globally  */

'use strict';
;(function(){

/* Get all the Classes from index.html  */

var operations = document.getElementsByClassName('blue');
var numbers = document.getElementsByClassName('numbers');
var output = document.getElementById('number-input');
var destroy = document.getElementsByClassName('red');
var submit = document.querySelector('.green');
var num1, num2;
var temp;

/* Functions to clear Text in Input Box  */

destroy[0].onclick = function() {
    output.value = '';
};
destroy[1].onclick = function() {
    var str = output.value;
    output.value = str.slice(0, str.length - 1);
};

/* Functions in iteration to handle Click Event on Number Buttons  */

for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (function(i) {
        return function() {
            output.value += this.innerHTML;
            console.log(this.innerHTML);
        };
    })(i), false);
}

/* Functions in iteration to handle Click Event on Operation Buttons  */

for (var j = 0; j < operations.length; j++) {
    operations[j].addEventListener('click', (function(i) {
        return function() {
            num1 = Number(output.value);
            var task = this.innerHTML;
            console.log(task);
            switch (task) {
                case 'x!':
                    var fact = 1;
                    for (var k = 1; k <= num1; k++) {
                        fact = fact * k;
                    }
                    output.value = fact;
                    break;

                case 'SIN':
                    output.value = Math.sin(num1);
                    break;
                case 'TAN':
                    output.value = Math.tan(num1);
                    break;
                case 'COS':
                    output.value = Math.cos(num1);
                    break;
                case 'LOG':
                    output.value = Math.log10(num1);
                    break;
                case 'LN':
                    output.value = Math.LN2(num1);
                    break;
                case '<i>e</i>':
                    output.value = Math.E;
                    break;
                case 'SQR':
                    output.value = num1 * num1;
                    break;
                case 'CUBE':
                    output.value = num1 * num1 * num1;
                    break;
                case '√':
                    output.value = Math.sqrt(num1);
                    break;
                case 'π ':
                    output.value = Math.PI;
                    break;

                case '(':
                    output.value += '(';
                    break;
                case ')':
                    output.value += ')';
                    break;
                case '00':
                    output.value += '00';
                    break;
                case '.':
                    output.value += '.';
                    break;
                case '+':
                case '-':
                case 'x':
                case '%':
                case '÷':
                case 'x<sup>y</sup>':
                    num1 = Number(output.value);
                    output.value = '';
                    temp = task;
                    break;
                case 'SAVE':
                    window.prompt('Copy to clipboard: Ctrl+C, Enter', output.value);
                    break;
            }
        };
    })(i), false);
}

/* Function to handle Click Event on Submit (=)  Button  */

submit.onclick = function() {
    if (temp === '+' || '-' || 'x' || '%' || '÷' || 'x<sup>y</sup>')
        num2 = Number(output.value);
    switch (temp) {
        case '+':
            output.value = num1 + num2;
            break;
        case '-':
            output.value = num1 - num2;
            break;
        case 'x':
            output.value = num1 * num2;
            break;
        case '%':
            output.value = num1 % num2;
            break;
        case '÷':
            if (num2 !== 0)
                output.value = num1 / num2;
            else {
                output.setAttribute('type', 'text');
                output.value = 'Infinity';
            }

            break;
        case 'x<sup>y</sup>':
            output.value = Math.pow(num1, num2);
            break;
    }
};
})();