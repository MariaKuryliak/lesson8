// JSON.stringify
// JSON.parse

// let car = {
//     brand: 'Hyundai',
//     model: 'Tucson',
//     year: 2015,
//     package: 'style'
// }
// console.log('Car', car);
// const carJSON = JSON.stringify(car);
// console.log('carJSON', carJSON);
// localStorage.setItem()
// localStorage.getItem()
// localStorage.removeItem()
// localStorage.key()
// localStorage.clear()
// localStorage.length

// localStorage.setItem('car', carJSON);
// sessionStorage.setItem('car', carJSON);
// let get = localStorage.getItem('car');
// console.log('get', get);
// let carObject = JSON.parse(get);
// console.log('carObject', carObject);

// console.log(localStorage.length)
// console.log(localStorage.getItem('cars'))
// if(localStorage.length>0 && localStorage.getItem('car')){
//     let carObject = JSON.parse(localStorage.getItem('car'));
//     console.log('carObject', carObject);
// }

// localStorage.setItem('car3', JSON.stringify('Kia'))
// console.log(localStorage.key(0))
// for(let i=0; i<localStorage.length; i++){
//     console.log(localStorage.key(i))
//     if(localStorage.key(i)==='car1'){
//         localStorage.removeItem('car1')
//     }
// }

// localStorage.clear();

// HTTP
// XMLHttpRequest
// AJAX
// API

// Method HTTP
    // GET
    // POST
    // DELETE
    // PUT
    // HEAD
    // OPTIONS

function getData_5(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','test.html', false);
    xhr.send();
    console.log(xhr.responseText);
}

// 
// 
// http://www.omdbapi.com/?i=tt3896198&apikey=eeb56d4b

function getData(){
    const xhr = new XMLHttpRequest();
    // xhr.open('GET','http://www.omdbapi.com/?i=tt3896198&apikey=eeb56d4b', false);
    // xhr.open('GET','http://www.omdbapi.com/?s=batman&apikey=eeb56d4b', false);
    //http://www.omdbapi.com/?s=Batman&page=2
    //http://www.omdbapi.com/?i=tt0944947&Season=1
    //http://www.omdbapi.com/?t=Game of Thrones&Season=1
    //http://www.omdbapi.com/?t=Game of Thrones&Season=1&Episode=1


    xhr.open('GET','http://www.omdbapi.com/?i=tt3896198&apikey=cd7a071b', false);
    xhr.send();
    const data = JSON.parse(xhr.responseText);
    console.log(data);
}
function getData1(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','http://www.omdbapi.com/?i=tt3896198&apikey=cd7a071b', false);
    xhr.send();
    const data1 = JSON.parse(xhr.responseText);
    console.log(data1);

}
function getData2(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','http://www.omdbapi.com/?i=tt3896198&apikey=cd7a071b', false);
    xhr.send();
    const data2 = JSON.parse(xhr.responseText);
    console.log(data2);
}









