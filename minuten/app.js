setTime({ ...time, minutes: value * 60, seconds: value });


const minuts = Math.floor(time.minutes / 60);
const seconds = time.minutes % 60; 