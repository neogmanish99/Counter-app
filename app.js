let val = 0;

let increase = document.querySelector('.inc');
let reset = document.querySelector('.reset');
let decrease = document.querySelector('.dec');

let count = document.querySelector('#count');

increase.addEventListener('click',add);
reset.addEventListener('click',res);
decrease.addEventListener('click',dec);

// INCREASE
function add(){
    count.innerHTML = val = val+1;

}
// RESET
function res(){
    count.innerHTML = val = 0;
}
//DECREASE
function dec(){
    count.innerHTML = val = val - 1;
}