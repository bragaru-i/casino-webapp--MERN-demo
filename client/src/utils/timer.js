var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
h = h < 10 ? h + '' + 0 : h;
m = m < 10 ? m + '' + 0 : m;

const time = `${h}:${m}`;
export default time;
