const options = {
    bottom: '100px',
    right: '2px',
    left: 'unset',
    time: '0.3s',
    mixColor: '#fff',
    backgroundColor: '#fff',
    buttonColorDark: '#100f2c',
    buttonColorLight: '#fff',
    saveInCookies: true,
    label: '🌓',
    autoMatchOsTheme: true
}

const darkmode = new Darkmode(options);

darkmode.showWidget();

var loader = document.getElementById("loader");
var preloader = document.getElementById("preloader");

function myFunction() {
    preloader.style.display = "none";
    loader.style.display = "none";
}

let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}
