
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    let promise = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
    
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status == 200) {
                resolve();
            } else {
                reject();
            }
        });
    });

    function calcUSD() {
        let data = JSON.parse(request.response);
        inputUsd.value = inputRub.value / data.usd;
    }

    promise
        .then(calcUSD())
        .catch(() => inputUsd.value = "Что-то пошло не так!");    

});