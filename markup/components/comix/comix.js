import { comixServicePromise } from './comixServicePromise'

(function(){
    let currentNumber;
    let lastNumber = comixServicePromise.getLastNumber().then(res => {
        lastNumber = res.data.num;
        currentNumber = res.data.num;
        renderData(res.data);
    });
    

    //random
    [...document.querySelectorAll('.js-comix-random')].forEach(function(item) {
        item.addEventListener('click', function() {
            comixServicePromise.getRandom(lastNumber).then(res => {
                renderData(res.data);
            });
        });
    });

    //start
    [...document.querySelectorAll('.js-comix-start')].forEach(function(item) {
        item.addEventListener('click', function() {
            comixServicePromise.getStart().then(res => {
                renderData(res.data);
            });
        });
    });

    //end
    [...document.querySelectorAll('.js-comix-end')].forEach(function(item) {
        item.addEventListener('click', function() {
            comixServicePromise.getLast().then(res => {
                renderData(res.data);
            });
        });
        
    });

    //prev
    [...document.querySelectorAll('.js-comix-prev')].forEach(function(item) {
        item.addEventListener('click', function() {
            comixServicePromise.getLast().then(res => {
                comixServicePromise.getPrev(currentNumber).then(res => {
                    renderData(res.data);
                });
            });
        });
    });

    //next
    [...document.querySelectorAll('.js-comix-next')].forEach(function(item) {
        item.addEventListener('click', function() {
            comixServicePromise.getNext(currentNumber, lastNumber).then(res => {
                renderData(res.data);
            });
        });
    });

    function renderData(data) {
        currentNumber = data.num;

        let title = document.querySelector('.js-comix-title');
        title.innerHTML = data.title;

        let description = document.querySelector('.js-comix-description');
        description.innerHTML = data.transcript;

        let date = document.querySelector('.js-comix-date');
        date.innerHTML = `${data.day}.${data.month}.${data.year}`;

        let img = document.querySelector('.js-comix-image');
        img.src = data.img;
        img.alt = data.alt;
    }

})();