var url = 'https://api.apilayer.com/fixer/latest?base=EUR&symbols=RON,BGN';

function moneyConvertRonToEuro(){
        fetch(url, {
                method: "GET",
                headers: {
                        "apikey": "tBLcyWIAWJMZf5HckcX5Xcv1XU0Hi9Bl"
                }
        })
        .then( response => {
                console.log(response);
                response.json()
                .then(data => {
                        console.log(data.rates);
                        const ronAmount = data.rates.RON;
                        const euroArray = document.querySelectorAll(".euro1");
                        const ronArray = document.querySelectorAll(".ron");
                        for(let i=0;i<ronArray.length;i++){
                                const ron = ronArray[i].value;
                                const euro = (ron / ronAmount).toFixed(2);
                                euroArray[i].value = euro;
                        }
                });  
        });
}
function moneyConvertBgnToEuro(){
        fetch(url, {
                method: "GET",
                headers: {
                        "apikey": "tBLcyWIAWJMZf5HckcX5Xcv1XU0Hi9Bl"
                }
        })
        .then( response => {
                console.log(response);
                response.json()
                .then(data => {
                        console.log(data.rates);
                        const bgnAmount = data.rates.BGN;
                        const euroArray = document.querySelectorAll(".euro2");
                        const bgnArray = document.querySelectorAll(".bgn");
                        for(let i=0;i<bgnArray.length;i++){
                                const bgn = bgnArray[i].value;
                                const euro = (bgn / bgnAmount).toFixed(2);
                                euroArray[i].value = euro;
                        }
                });  
        });
}

function resolveAfter2Seconds(x) {
        return new Promise(resolve => {
                setTimeout(() => {
                resolve(x);
                }, 2000);
        });
}

async function getTotalRon(){
        let arr = await resolveAfter2Seconds(document.querySelectorAll('.ron'));
        let total = 0;
        for(let i=0; i<arr.length; i++) {
                if(parseFloat(arr[i].value)) {
                        total += parseFloat(arr[i].value);
                }
        }
        console.log("total lei: " + total);
        document.getElementById('total_ron').value = total;
}
async function getTotalEuro1(){
        let arr = await resolveAfter2Seconds(document.querySelectorAll('.euro1'));
        let total = 0;
        for(let i=0; i<arr.length; i++) {
                if(parseFloat(arr[i].value)) {
                        total += parseFloat(arr[i].value);
                }
        }
        console.log("total euro1: " + total);
        document.getElementById('total_euro1').value = total.toFixed(2);
}
document.querySelector(".convertRonButton").addEventListener("click", moneyConvertRonToEuro);
document.querySelector(".convertRonButton").addEventListener("click", getTotalRon);
document.querySelector(".convertRonButton").addEventListener("click", getTotalEuro1);

async function getTotalBgn(){
        let arr = await resolveAfter2Seconds(document.querySelectorAll('.bgn'));
        let total = 0;
        for(let i=0; i<arr.length; i++) {
                if(parseFloat(arr[i].value)) {
                        total += parseFloat(arr[i].value);
                }
        }
        console.log("total bgn: " + total);
        document.getElementById('total_bgn').value = total;
}
async function getTotalEuro2(){
        let arr = await resolveAfter2Seconds(document.querySelectorAll('.euro2'));
        let total = 0;
        for(let i=0; i<arr.length; i++) {
                if(parseFloat(arr[i].value)) {
                        total += parseFloat(arr[i].value);
                }
        }
        console.log("total euro2: " + total);
        document.getElementById('total_euro2').value = total.toFixed(2);
}
document.querySelector(".convertBgnButton").addEventListener("click", moneyConvertBgnToEuro);
document.querySelector(".convertBgnButton").addEventListener("click", getTotalBgn);
document.querySelector(".convertBgnButton").addEventListener("click", getTotalEuro2);

function addRonRow(){
        let r = document.createElement("div");
        r.className="row";
        let s1 = document.createElement("span");
        s1.textContent="RON ";
        let i1 = document.createElement("input");
        i1.type="number";
        i1.name="ron";
        i1.setAttribute("class", "ron");
        i1.placeholder="0.00";
        i1.step="0.01";
        let s2 = document.createElement("span");
        s2.textContent=" ---> ";
        let i2 = document.createElement("input");
        i2.type="number";
        i2.name="euro1";
        i2.setAttribute("class", "euro1");
        i2.placeholder="0.00";
        i2.step="0.01";
        let s3 = document.createElement("span");
        s3.textContent=" €";
        r.appendChild(s1);
        r.appendChild(i1);
        r.appendChild(s2);
        r.appendChild(i2);
        r.appendChild(s3);
        document.querySelector('.conversionWrapper').append(r);
}
function addBgnRow(){
        let r = document.createElement("div");
        r.className="row";
        let s1 = document.createElement("span");
        s1.textContent="BGN ";
        let i1 = document.createElement("input");
        i1.type="number";
        i1.name="bgn";
        i1.setAttribute("class", "bgn");
        i1.placeholder="0.00";
        i1.step="0.01";
        let s2 = document.createElement("span");
        s2.textContent=" ---> ";
        let i2 = document.createElement("input");
        i2.type="number";
        i2.name="euro2";
        i2.setAttribute("class", "euro2");
        i2.placeholder="0.00";
        i2.step="0.01";
        let s3 = document.createElement("span");
        s3.textContent=" €";
        r.appendChild(s1);
        r.appendChild(i1);
        r.appendChild(s2);
        r.appendChild(i2);
        r.appendChild(s3);
        document.querySelector('.conversionWrapper2').append(r);
}

document.querySelector(".addRonRowButton").addEventListener("click", addRonRow);
document.querySelector(".addBgnRowButton").addEventListener("click", addBgnRow);
