document.addEventListener("DOMContentLoaded", function(){
    console.log("Document is ready");

    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');
    let currentValue = "";

    function evaluateResult() {
        console.log('Current Value', currentValue);
        const convertedValue = currentValue
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/%/g, "*0.01")
            .replace(/(\d+(\.\d+)?)x²/g, "Math.pow($1, 2)")  
            .replace(/sin\((.*?)\)/g, "Math.sin(toRadians($1))")  
            .replace(/cos\((.*?)\)/g, "Math.cos(toRadians($1))")  
            .replace(/tan\((.*?)\)/g, "Math.tan(toRadians($1))")  
            .replace(/π/g, "Math.PI")
            .replace(/ln\((.*?)\)/g, "Math.log($1)")  
            .replace(/log\((.*?)\)/g, "Math.log10($1)")  
            .replace(/e/g, "Math.E")
            .replace(/√\((.*?)\)/g, "Math.sqrt($1)");  

        console.log('Converted Value', convertedValue);
        try {
            const result = eval(convertedValue);
            currentValue = result.toString();
            display.value = currentValue;
        } catch (error) {
            console.error(error);
            currentValue = "ERROR";
            display.value = currentValue;
        }
    }

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function(){
            console.log('button clicked', button.innerText);
            const value = button.innerText;

            try {
                if (value === "AC") {
                    currentValue = "";
                    display.value = currentValue;
                } else if (value === "=") {
                    evaluateResult();
                } else {
                    currentValue += value;
                    display.value = currentValue;
                }
            } catch (error) {
                console.error(error);
                currentValue = "ERROR";
                display.value = currentValue;
            }
        });
    }

    function toRadians(angle) {
        return angle * Math.PI / 180;
    }
});
