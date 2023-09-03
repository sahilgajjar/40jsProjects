document.addEventListener("DOMContentLoaded", function() {

const hexValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ];


const btn = document.getElementById("btn");
let color = '#'
let islightColor = true; 

btn.addEventListener("mousedown", function() {

    color = '#';
    btn.style.backgroundColor = 'transparent';
    btn.style.boxShadow = '0px 0px 0px gray';

    for(let i = 0; i<6; i++){
        color += hexValues[getRandomNumber()];
    }

    if(isLight(color)) {
        document.documentElement.style.setProperty('--font-color', 'black');
    } else {
        document.documentElement.style.setProperty('--font-color', 'white');
    }

    // changing the main color theme
    document.documentElement.style.setProperty('--primary-color', color);
});

btn.addEventListener("mouseup", function() {

    if(isLight(color)) {
        
        document.getElementById('btn').style.color = 'black';
        document.documentElement.style.setProperty('--mood-color', 'white');
        document.documentElement.style.setProperty('--border-color', 'black');
    } else {
        
        document.getElementById('btn').style.color = 'white';
        document.documentElement.style.setProperty('--mood-color', '#131313');
        document.documentElement.style.setProperty('--border-color', 'white');
    }
    btn.style.backgroundColor = `${color}`;
    btn.style.boxShadow = `4px 4px 4px #9e9e9e`;
})

function getRandomNumber(){
    return Math.floor(Math.random() * 15);
}

function isLight(hexColor) {
    hexColor = +("0x" + hexColor.slice(1).replace( 
        hexColor.length < 5 && /./g, '$&$&')
    );
  
      r = hexColor >> 16;
      g = hexColor >> 8 & 255;
      b = hexColor & 255;

       // HSP equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt( 0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp>127.5) {

        return true;
    } 
    else {

        return false;
    }
}

})