let myLogo = document.getElementById('myLogo')
let ytLogo = document.getElementById('youtubeLogo')
let instaLogo = document.getElementById('instaLogo')
let tiktokLogo = document.getElementById('tiktokLogo')
let spotifyLogo = document.getElementById('spotifyLogo')
let netflixLogo = document.getElementById('netflixLogo')
let canvaLogo = document.getElementById('canvaLogo')
let disneyLogo = document.getElementById('disneyLogo')
let amazonLogo = document.getElementById('amazonLogo')

let pilih1 = document.getElementById('pilih1')
let pilih2 = document.getElementById('pilih2')
let menu1 = document.getElementById('menu1')
let menu2 = document.getElementById('menu2')

let defForm = document.getElementById('defaultForm')
let mainMenu = document.getElementById('mainMenu')
let ytForm = document.getElementById('youtubeForm')
let igForm = document.getElementById('instaForm')
let ttForm = document.getElementById('tiktokForm')
let akunYtForm = document.getElementById('akunYtForm')
let akunStForm = document.getElementById('akunStForm')
let akunNfForm = document.getElementById('akunNfForm')
let akunCvForm = document.getElementById('akunCvForm')
let akunDnForm = document.getElementById('akunDnForm')
let akunAzForm = document.getElementById('akunAzForm')

ytLogo.style.display = "none";
instaLogo.style.display = "none";
tiktokLogo.style.display = "none";
spotifyLogo.style.display = "none";
netflixLogo.style.display = "none";
canvaLogo.style.display = "none";
disneyLogo.style.display = "none";
amazonLogo.style.display = "none";

pilih1.style.display = "none";
pilih2.style.display = "none";

ytForm.style.display = "none";
igForm.style.display = "none";
ttForm.style.display = "none";
akunYtForm.style.display = "none";
akunStForm.style.display = "none";
akunNfForm.style.display = "none";
akunCvForm.style.display = "none";
akunDnForm.style.display = "none";
akunAzForm.style.display = "none";

function produk() {
    if (mainMenu.value == 'sosmed') {
        pilih1.style.display = "block"
        pilih2.style.display = "none"

        myLogo.style.display = "block"
        ytLogo.style.display = "none"
        instaLogo.style.display = "none"
        tiktokLogo.style.display = "none"
        spotifyLogo.style.display = "none"
        netflixLogo.style.display = "none"
        canvaLogo.style.display = "none"
        disneyLogo.style.display = "none"
        amazonLogo.style.display = "none"

        defForm.style.display = "block"
        ytForm.style.display = "none"
        igForm.style.display = "none"
        ttForm.style.display = "none"
        akunYtForm.style.display = "none"
        akunStForm.style.display = "none"
        akunNfForm.style.display = "none"
        akunCvForm.style.display = "none"
        akunDnForm.style.display = "none"
        akunAzForm.style.display = "none"
    }
    if (mainMenu.value == 'akun') {
        pilih1.style.display = "none"
        pilih2.style.display = "block"

        myLogo.style.display = "block"
        ytLogo.style.display = "none"
        instaLogo.style.display = "none"
        tiktokLogo.style.display = "none"
        spotifyLogo.style.display = "none"
        netflixLogo.style.display = "none"
        canvaLogo.style.display = "none"
        disneyLogo.style.display = "none"
        amazonLogo.style.display = "none"

        defForm.style.display = "block"
        ytForm.style.display = "none"
        igForm.style.display = "none"
        ttForm.style.display = "none"
        akunYtForm.style.display = "none"
        akunStForm.style.display = "none"
        akunNfForm.style.display = "none"
        akunCvForm.style.display = "none"
        akunDnForm.style.display = "none"
        akunAzForm.style.display = "none"
    }
}

function milih1() {
    if (menu1.value == 'yt') {
        console.log('Youtube')
        ytLogo.style.display = "block"
        instaLogo.style.display = "none"
        tiktokLogo.style.display = "none"
        myLogo.style.display = "none"
        spotifyLogo.style.display = "none"
        netflixLogo.style.display = "none"
        canvaLogo.style.display = "none"
        disneyLogo.style.display = "none"
        amazonLogo.style.display = "none"

        defForm.style.display = "none"
        ytForm.style.display = "block"
        igForm.style.display = "none"
        ttForm.style.display = "none"
        akunYtForm.style.display = "none"
        akunStForm.style.display = "none"
        akunNfForm.style.display = "none"
        akunCvForm.style.display = "none"
        akunDnForm.style.display = "none"
        akunAzForm.style.display = "none"
    }
    if (menu1.value == 'ig') {
        console.log('Instagram')
        instaLogo.style.display = "block"
        ytLogo.style.display = "none"
        tiktokLogo.style.display = "none"
        myLogo.style.display = "none"
        spotifyLogo.style.display = "none"
        netflixLogo.style.display = "none"
        canvaLogo.style.display = "none"
        disneyLogo.style.display = "none"
        amazonLogo.style.display = "none"

        defForm.style.display = "none"
        ytForm.style.display = "none"
        igForm.style.display = "block"
        ttForm.style.display = "none"
        akunYtForm.style.display = "none"
        akunStForm.style.display = "none"
        akunNfForm.style.display = "none"
        akunCvForm.style.display = "none"
        akunDnForm.style.display = "none"
        akunAzForm.style.display = "none"
    }
    if (menu1.value == 'tt') {
        console.log('Tiktok');
        tiktokLogo.style.display = "block"
        ytLogo.style.display = "none"
        instaLogo.style.display = "none"
        myLogo.style.display = "none"
        spotifyLogo.style.display = "none"
        netflixLogo.style.display = "none"
        canvaLogo.style.display = "none"
        disneyLogo.style.display = "none"
        amazonLogo.style.display = "none"

        defForm.style.display = "none"
        ytForm.style.display = "none"
        igForm.style.display = "none"
        ttForm.style.display = "block"
        akunYtForm.style.display = "none"
        akunStForm.style.display = "none"
        akunNfForm.style.display = "none"
        akunCvForm.style.display = "none"
        akunDnForm.style.display = "none"
        akunAzForm.style.display = "none"
    }
}
function milih2() {
    if (menu2.value == 'yt') {
        tiktokLogo.style.display = "none"
        ytLogo.style.display = "block"
        instaLogo.style.display = "none"
        myLogo.style.display = "none"
        spotifyLogo.style.display = "none"
        netflixLogo.style.display = "none"
        canvaLogo.style.display = "none"
        disneyLogo.style.display = "none"
        amazonLogo.style.display = "none"

        defForm.style.display = "none"
        ytForm.style.display = "none"
        igForm.style.display = "none"
        ttForm.style.display = "none"
        akunYtForm.style.display = "block"
        akunStForm.style.display = "none"
        akunNfForm.style.display = "none"
        akunCvForm.style.display = "none"
        akunDnForm.style.display = "none"
        akunAzForm.style.display = "none"
    }
    if (menu2.value == 'st') {
        tiktokLogo.style.display = "none"
        ytLogo.style.display = "none"
        instaLogo.style.display = "none"
        myLogo.style.display = "none"
        spotifyLogo.style.display = "block"
        netflixLogo.style.display = "none"
        canvaLogo.style.display = "none"
        disneyLogo.style.display = "none"
        amazonLogo.style.display = "none"

        defForm.style.display = "none"
        ytForm.style.display = "none"
        igForm.style.display = "none"
        ttForm.style.display = "none"
        akunYtForm.style.display = "none"
        akunStForm.style.display = "block"
        akunNfForm.style.display = "none"
        akunCvForm.style.display = "none"
        akunDnForm.style.display = "none"
        akunAzForm.style.display = "none"
    }
    if (menu2.value == 'nf') {
        tiktokLogo.style.display = "none"
        ytLogo.style.display = "none"
        instaLogo.style.display = "none"
        myLogo.style.display = "none"
        spotifyLogo.style.display = "none"
        netflixLogo.style.display = "block"
        canvaLogo.style.display = "none"
        disneyLogo.style.display = "none"
        amazonLogo.style.display = "none"

        defForm.style.display = "none"
        ytForm.style.display = "none"
        igForm.style.display = "none"
        ttForm.style.display = "none"
        akunYtForm.style.display = "none"
        akunStForm.style.display = "none"
        akunNfForm.style.display = "block"
        akunCvForm.style.display = "none"
        akunDnForm.style.display = "none"
        akunAzForm.style.display = "none"
    }
    if (menu2.value == 'cv') {
        tiktokLogo.style.display = "none"
        ytLogo.style.display = "none"
        instaLogo.style.display = "none"
        myLogo.style.display = "none"
        spotifyLogo.style.display = "none"
        netflixLogo.style.display = "none"
        canvaLogo.style.display = "block"
        disneyLogo.style.display = "none"
        amazonLogo.style.display = "none"

        defForm.style.display = "none"
        ytForm.style.display = "none"
        igForm.style.display = "none"
        ttForm.style.display = "none"
        akunYtForm.style.display = "none"
        akunStForm.style.display = "none"
        akunNfForm.style.display = "none"
        akunCvForm.style.display = "block"
        akunDnForm.style.display = "none"
        akunAzForm.style.display = "none"
    }
    if (menu2.value == 'dn') {
        tiktokLogo.style.display = "none"
        ytLogo.style.display = "none"
        instaLogo.style.display = "none"
        myLogo.style.display = "none"
        spotifyLogo.style.display = "none"
        netflixLogo.style.display = "none"
        canvaLogo.style.display = "none"
        disneyLogo.style.display = "block"
        amazonLogo.style.display = "none"

        defForm.style.display = "none"
        ytForm.style.display = "none"
        igForm.style.display = "none"
        ttForm.style.display = "none"
        akunYtForm.style.display = "none"
        akunStForm.style.display = "none"
        akunNfForm.style.display = "none"
        akunCvForm.style.display = "none"
        akunDnForm.style.display = "block"
        akunAzForm.style.display = "none"
    }
    if (menu2.value == 'az') {
        tiktokLogo.style.display = "none"
        ytLogo.style.display = "none"
        instaLogo.style.display = "none"
        myLogo.style.display = "none"
        spotifyLogo.style.display = "none"
        netflixLogo.style.display = "none"
        canvaLogo.style.display = "none"
        disneyLogo.style.display = "none"
        amazonLogo.style.display = "block"

        defForm.style.display = "none"
        ytForm.style.display = "none"
        igForm.style.display = "none"
        ttForm.style.display = "none"
        akunYtForm.style.display = "none"
        akunStForm.style.display = "none"
        akunNfForm.style.display = "none"
        akunCvForm.style.display = "none"
        akunDnForm.style.display = "none"
        akunAzForm.style.display = "block"
    }
}

var totalYt = document.getElementById('totalYt')
var totalIg = document.getElementById('totalIg')
var totalTt = document.getElementById('totalTt')
var hasil
var harga1
var harga2

const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(number);
}

function yt1() {
    var ytb1 = document.getElementById('ytb1').value;

    if (ytb1 == 'subs') {
        harga1 = 5000
    }
    if (ytb1 == 'views') {
        harga1 = 5000
    }
    if (ytb1 == 'likes') {
        harga1 = 5000
    }
    if (!harga2) {
        totalYt.innerHTML = rupiah(harga1)
    } else {
        hasil = harga1 + harga2
        totalYt.innerHTML = rupiah(hasil)
    }
}
function yt2() {
    var ytb2 = document.getElementById('ytb2').value

    if (ytb2 == '100') {
        harga2 = 5000
    }
    if (ytb2 == '200') {
        harga2 = 10000
    }
    if (ytb2 == '500') {
        harga2 = 25000
    }
    hasil = harga1 + harga2
    totalYt.innerHTML = rupiah(hasil)
}

function ig1() {
    var ins1 = document.getElementById('ins1').value

    if (ins1 == 'follo') {
        harga1 = 8000
    }
    if (ins1 == 'likes') {
        harga1 = 5000
    }
    if (!harga2) {
        totalIg.innerHTML = rupiah(harga1)
    } else {
        hasil = harga1 + harga2
        totalIg.innerHTML = rupiah(hasil)
    }
}
function ig2() {
    var ins2 = document.getElementById('ins2').value

    if (ins2 == '1000') {
        harga2 = 5000
    }
    if (ins2 == '2000') {
        harga2 = 10000
    }
    if (ins2 == '5000') {
        harga2 = 25000
    }
    hasil = harga1 + harga2
    totalIg.innerHTML = rupiah(hasil)
}

function tt1() {
    var tkk1 = document.getElementById('tkk1').value

    if (tkk1 == 'follo') {
        harga1 = 5000
    }
    if (tkk1 == 'likes') {
        harga1 = 2000
    }
    if (!harga2) {
        totalTt.innerHTML = rupiah(harga1)
    } else {
        hasil = harga1 + harga2
        totalTt.innerHTML = rupiah(hasil)
    }
}
function tt2() {
    var tkk1 = document.getElementById('tkk1').value
    var tkk2 = document.getElementById('tkk2').value

    if (tkk2 == '100' && tkk1 == 'follo') {
        harga2 = 5000
    }
    if (tkk2 == '500' && tkk1 == 'follo') {
        harga2 = 35000
    }
    if (tkk2 == '1000' && tkk1 == 'follo') {
        harga2 = 60000
    }
    if (tkk2 == '100' && tkk1 == 'likes') {
        harga2 = 3000
    }
    if (tkk2 == '500' && tkk1 == 'likes') {
        harga2 = 13000
    }
    if (tkk2 == '1000' && tkk1 == 'likes') {
        harga2 = 23000
    }
    hasil = harga1 + harga2
    totalTt.innerHTML = rupiah(hasil)
}

var totalAkunYt = document.getElementById('totalAkunYt')
var totalAkunSt = document.getElementById('totalAkunSt')
var totalAkunNf = document.getElementById('totalAkunNf')
var totalAkunCv = document.getElementById('totalAkunCv')
var totalAkunDn = document.getElementById('totalAkunDn')
var totalAkunAz = document.getElementById('totalAkunAz')
var harga

function akunYt() {
    var akunYtb = document.getElementById('akunYtb').value

    if (akunYtb == '1') {
        harga = 2000
    }
    if (akunYtb == '2') {
        harga = 4000
    }
    totalAkunYt.innerHTML = rupiah(harga)
}
function akunSt() {
    var akunSpt = document.getElementById('akunSpt').value

    if (akunSpt == '1') {
        harga = 2000
    }
    if (akunSpt == '2') {
        harga = 4000
    }
    totalAkunSt.innerHTML = rupiah(harga)
}
function akunNf() {
    var akunNfx = document.getElementById('akunNfx').value

    if (akunNfx == '1') {
        harga = 2000
    }
    if (akunNfx == '2') {
        harga = 4000
    }
    totalAkunNf.innerHTML = rupiah(harga)
}
function akunCv() {
    var akunCva = document.getElementById('akunCva').value

    if (akunCva == '1') {
        harga = 2000
    }
    if (akunCva == '2') {
        harga = 4000
    }
    totalAkunCv.innerHTML = rupiah(harga)
}
function akunDn() {
    var akunDnh = document.getElementById('akunDnh').value

    if (akunDnh == '1') {
        harga = 2000
    }
    if (akunDnh == '2') {
        harga = 4000
    }
    totalAkunDn.innerHTML = rupiah(harga)
}
function akunAz() {
    var akunAzp = document.getElementById('akunAzp').value

    if (akunAzp == '1') {
        harga = 2000
    }
    if (akunAzp == '2') {
        harga = 4000
    }
    totalAkunAz.innerHTML = rupiah(harga)
}