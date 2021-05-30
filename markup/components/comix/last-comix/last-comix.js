import { comixServicePromise } from '../comixServicePromise'

(function(){
    let lastNumber = comixServicePromise.getLastNumber().then(res => {
        lastNumber = res.data.num;
        getLastComix();
    });

    function getLastComix() {
        for(let i = lastNumber; i >= (lastNumber - 9); i--) {
            comixServicePromise.getNumberComix(i).then(res => {
                renderLastComix(res.data);
            });
        }
    }

    function renderLastComix (comix) {
        let lastComixContainer = document.querySelector('.js-last-comix');
        let link = document.createElement("a"); 
        link.href = comix.img;  
        link.target = "_blank";
        link.classList.add('last-comix__link');

        let img = document.createElement("img");
        img.classList.add('last-comix__imag');
        img.src = comix.img;

        link.append(img);
        lastComixContainer.append(link);
    }

})();