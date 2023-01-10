const string = prompt('scrivi una parola');
const x = string

const arrayChar = string.split( x); 
const reverseArray = arrayChar.reverse (x); 

function palindroma(){
    if (arrayChar == reverseArray) {
        document.write('è palindroma')
    } 
    else{
        document.write('non è palindroma')
    }
}
