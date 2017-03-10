        const endpoint = 'http://api.fixer.io/latest';

        const euroField = document.querySelector(".euro");
        const poundField = document.querySelector(".pound");


        function moneyConvert(){

                fetch(endpoint) 
                .then( response => response.json())
                .then(data => {
                    const euroAmount = data.rates.GBP;
                    const euro = euroField.value;
                    const pound = (euro * euroAmount).toFixed(2);
                    poundField.value = pound;
           });          
        }

        document.querySelector(".convertButton").addEventListener("click", moneyConvert);
        euroField.addEventListener("input", moneyConvert);



    
