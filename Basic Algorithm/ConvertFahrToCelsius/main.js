const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");

const inputs = document.getElementsByClassName("input");

for (let index = 0; index < inputs.length; index++) {
    let input = inputs[index];

    input.addEventListener("input", function(e) {
        let value = parseFloat(e.target.value);
        console.log(e.target.name + ":" + value)

        switch (e.target.name) {
            case "celsius":
                fahrenheitInput.value = (value*9/5)+32
                break;
                
        
            case "fahrenheit":
                celsiusInput.value = (value-32)*5/9 + "deg C"
                break;
                return "fahrenheit";
                 
        }  



    });

   


}
