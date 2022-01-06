var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;


function increment(){
    document.getElementById('subtrair').disabled = false;
    if(currentNumber <=9){
        document.getElementById('adicionar').disabled = false;
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        }
        else{
        document.getElementById('adicionar').disabled = true;
        }
}

function decrement(){
    document.getElementById('adicionar').disabled = false;
    if(currentNumber >=1){
    document.getElementById('subtrair').disabled = false;
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    else{
    document.getElementById('subtrair').disabled = true;
    }
}
