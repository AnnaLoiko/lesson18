var tds = document.querySelectorAll('td');

// tds.forEach( (td) => {
//     td.onclick = (e) => {
//         e.stopPropagation();
//         // e.target.style.background = 'red';
//         console.log('клик на td');
//     }
// })


// обработчик срабатывает на всех элементах - bubbling

// document.documentElement.onclick = function() {
//     console.log('клик на html');
// }


// document.body.onclick = function() {
//     console.log('клик на body');
// }

//  ДЕЛЕГИРОВАНИЕ СОБЫТИЙ

var table = document.querySelector('table');
table.onclick = function(e){
    console.log(e.target.tagName);
    if (e.target.tagName !== 'TD' ) return;
    
    e.target.style.background = e.target.style.background ? null : 'red';
    
}

// перехват (capturing)
table.addEventListener('click', () => {}, true);
document.body.addEventListener('click', () => {
    console.log('клик на body');
}, true);
document.documentElement.addEventListener('click', () => {
    console.log('клик на html');
}, true);


