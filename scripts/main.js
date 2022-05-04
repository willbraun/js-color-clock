const clockDisplay = document.querySelector('.clock-display');
let showHex = false;

// This function converts a date object to an array of [R,G,B] hex string values
// It includes a function to convert a number to hexadecimal. 
// It scales the number to 255 over a multiplier (24 or 60 usually) based on if you are using hours, minutes, or seconds.
// It does this so the possible numbers in each field cover the full range of RGB values
const dateToArrayOfRGB = (date) => {
    const numToHex = (num,multiplier) => {
        let value = Math.floor(num*255/multiplier).toString(16).toUpperCase();
        return value.length === 2 ? value : `0${value}`;
    }
    return [numToHex(date.getHours(),24),numToHex(date.getMinutes(),60),numToHex(date.getSeconds(),60)];
}

// This function handles all of the actions that occur when the display should update
const updateDisplay = () => { 
    let now = new Date;
    let timeDisplay = now.toTimeString().slice(0,8);
    let hexDisplay = dateToArrayOfRGB(now).join(':');
    clockDisplay.innerText = showHex ? hexDisplay : timeDisplay;
    document.querySelector('.clock-progress-bar').style.width = `${(now.getSeconds()*14/60).toFixed(2)}rem`;
    document.querySelector('.clock').style.background = `#${dateToArrayOfRGB(now).join('')}`;
}

updateDisplay();
setInterval(updateDisplay,1000);

clockDisplay.addEventListener('mouseover', () => {
    showHex = true;
    updateDisplay();
});
clockDisplay.addEventListener('mouseout', () => {
    showHex = false;
    updateDisplay();
});