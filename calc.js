let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let specialChars = ['%', '*', '/', '-', '+', '=']

let string = '';


// const calculate = (buttonValue) => {
//     if (buttonValue === '=')
//     if(string !== '') {
//         try
//         {
//             string = eval(string.replace('%', '/100'));

//         } catch(e){
//             console.error('Invalid Expression', e)
//         }
        
        
//     } else if (buttonValue == 'AC') {
//         string = '';
        

//     } else if (buttonValue == 'DEL') {
//         string = string.substring(0, string.length - 1);
        
//     } else {
//         if (buttonValue == '' && specialChars.includes(buttonValue)) {
//             string += buttonValue;
            
//         }
//     }
    
//     input.value = string
    
// }

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculate(button.getAttribute('data-value'));
        
//     })
// })
 
let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=' && string !== '') {
            string = eval(string.replace('%', '/100'));
            input.value = string;
            string = ''
        } else if (e.target.innerHTML == 'AC') {
            string = '';
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {

            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            if(string === '' && specialChars.includes(e.target.innerHTML)) {
                return;
            }
                
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})