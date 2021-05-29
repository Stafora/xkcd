import axios from 'axios'

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const xkcd = axios.create({
    baseURL: `${proxyUrl}https://xkcd.com/`,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'X-Requested-With': 'wololo',
    }
});

export const comixServicePromise = {
    getRandom(maxNumber) {
        let page = Math.floor(Math.random() * maxNumber);
        return xkcd.get(`${page}/info.0.json`)
    },
    getStart(){
        return xkcd.get(`1/info.0.json`)
    },
    getLast(){
        return xkcd.get(`/info.0.json`)
    },
    getPrev(currentNumber) {
        let page = 1;
        if(currentNumber != 1){
            page = currentNumber - 1;
        }
        return xkcd.get(`${page}/info.0.json`)
    },
    getNext(currentNumber, lastNumber) {
        let page;
        if(currentNumber == lastNumber){
            page = lastNumber;
        } else {
            page = currentNumber + 1;
        }
        return xkcd.get(`${page}/info.0.json`)
    },
    getLastNumber() {
        return xkcd.get("/info.0.json")
    },
    getNumberComix(page) {
        return xkcd.get(`${page}/info.0.json`)
    }
}