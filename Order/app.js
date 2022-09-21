let myLogo = document.getElementById('myLogo')
let ytLogo = document.getElementById('youtubeLogo')
let instaLogo = document.getElementById('instaLogo')
let tiktokLogo = document.getElementById('tiktokLogo')

let defForm = document.getElementById('defaultForm')
let mainMenu = document.getElementById('mainMenu')
let ytForm = document.getElementById('youtubeForm')
let igForm = document.getElementById('instaForm')
let ttForm = document.getElementById('tiktokForm')

ytLogo.style.display = "none";
instaLogo.style.display = "none";
tiktokLogo.style.display = "none";

ytForm.style.display = "none";
igForm.style.display = "none";
ttForm.style.display = "none";




function milih() {
    var mainMenu = document.getElementById('mainMenu')

    if (mainMenu.value == 'yt') {
        console.log('Youtube')
        ytLogo.style.display = "block"
        instaLogo.style.display = "none"
        tiktokLogo.style.display = "none"
        myLogo.style.display = "none"

        defForm.style.display = "none"
        ytForm.style.display = "block"
        igForm.style.display = "none"
        ttForm.style.display = "none"
    }
    if (mainMenu.value == 'ig') {
        console.log('Instagram')
        instaLogo.style.display = "block"
        ytLogo.style.display = "none"
        tiktokLogo.style.display = "none"
        myLogo.style.display = "none"

        defForm.style.display = "none"
        ytForm.style.display = "none"
        igForm.style.display = "block"
        ttForm.style.display = "none"
    }
    if (mainMenu.value == 'tt') {
        console.log('Tiktok');
        tiktokLogo.style.display = "block"
        ytLogo.style.display = "none"
        instaLogo.style.display = "none"
        myLogo.style.display = "none"

        defForm.style.display = "none"
        ytForm.style.display = "none"
        igForm.style.display = "none"
        ttForm.style.display = "block"
    }

}

