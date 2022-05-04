// This function converts a date object to a hex code.
// It includes a function to convert a number to hexadecimal. 
// It scales the number to 255 over a multiplier (24 or 60 usually) based on if you are using hours, minutes, or seconds.
// It does this so the possible numbers in each field cover the full range of RGB values
const dateToHexCode = (date) => {
    const numToHex = (num,multiplier) => {
        let value = Math.floor(num*255/multiplier).toString(16);
        return value.length === 2 ? value : `0${value}`;
    }
    return `${numToHex(date.getHours(),24)}${numToHex(date.getMinutes(),60)}${numToHex(date.getSeconds(),60)}`
}

let clockDisplay = document.querySelector('.clock-display');

const newTime = setInterval(function(){
    let now = new Date();
    clockDisplay.innerText = now.toTimeString().slice(0,8);
    document.querySelector('.clock-progress-bar').style.width = `${(now.getSeconds()/60)*14}rem`;
    document.querySelector('.clock').style.background = `#${dateToHexCode(now)}`;
},1000);

console.dir(document.querySelector('.clock-progress-bar'));