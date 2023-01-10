const string = prompt( ' Inserisci la parola ');  
const value = palindroma (string);  
console.log(value);  

function palindroma (parola){  
    const arrValue = string.split ('');   
    
    const reveArrVal = arrValue.reverse();   
    
    const revString = reveArrVal.join('');  
  
if (string == revString)   
{  
alert('è palindroma ');   
}  
else {  
alert (' non è palindroma' );   
}  
}  

