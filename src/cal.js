document.addEventListener("DOMContentLoaded", function(){
    console.log("Document is ready");

    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');


    let currentValue = "";

    function evaluateResult(){
        console.log('Current Value', currentValue);
        const convertedValue = currentValue
            .replace("×","*")
            .replace("÷","/")
            .replace('%','*0.01')

        console.log('Converted Value', convertedValue);
        const result = eval(convertedValue);
        currentValue = result.toString();
        display.value = currentValue;

    }


    for (i=0; i < buttons.length; i++){
        const button = buttons[i];
        button.addEventListener('click', function(){
            console.log('button clicked', button.innerText);
            const value = button.innerText;

            if(value=="AC"){
                currentValue="";
                display.value = currentValue;
            }   
            else if(value == "="){
                evaluateResult();
            }
            else{
            currentValue += value;
            display.value = currentValue;
            }
        })
    }

})