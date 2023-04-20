let text = document.getElementById('text');
let text3 = document.getElementById('text3');
let text2 = document.getElementById('text2');

let hill1 = document.getElementById('hill1')
let hill4 = document.getElementById('hill4')
let leaf = document.getElementById('leaf')
let hill5 = document.getElementById('hill5')
let cat = document.getElementById('cat')
let catLeft = cat.style.left

window.addEventListener("scroll", ()=> {
    let value = window.scrollY;

    console.log(value);
    if(value<=1000){
    text.style.marginTop = (value-50)*2.5 +'px';
    // text3.style.marginTop = (value+130)*2.5 +'px';
    // text2.style.marginTop = (value+60)*2.5 +'px';

    leaf.style.top = value*-1.5+'px'
    leaf.style.left = value*1.5+'px'
    hill5.style.left = value*1.5+'px'
    hill4.style.left = value*-2.5+'px'
    hill1.style.top = value*1 + 'px'
    

    cat.style.marginTop = -(-value*-0.3)+'px'
 
}

    else{null}
})


