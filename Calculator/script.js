'use strict';

// guide til calculator 
/* https://www.youtube.com/watch?v=QS6Y0ezhyCs&t=357s */ 

// her er alle knapper i lommeregneren gemt i en variabel buttons
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', function(num) {
        
        switch(num.target.innerHTML) {
            case 'AC':
                display.innerHTML = "";
                break;
            case '=':
                try {
                    display.innerHTML = eval(display.innerHTML);
                }
                catch {
                    display.innerHTML = 'error!';
                }
                break;
            default: 
                display.innerHTML += num.target.innerHTML;
        };

    });
});