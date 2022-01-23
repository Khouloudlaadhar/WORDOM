const btnbold = document.getElementById("bdbtn")
console.log(btnbold)

const selectTextArea = document.getElementById("text")

btnbold.addEventListener('click', function (event) {
    selectTextArea.classList.toggle('bold')
    btnbold.classList.toggle('selected')
    btnbold.style.borderColor = 'black'
});

const btnitalic = document.getElementById("italicbtn")


btnitalic.addEventListener('click', function (event) {
    selectTextArea.classList.toggle('italic')

});

const btnunderline = document.getElementById("underlinebtn")
btnunderline.addEventListener('click', function (event) {
    selectTextArea.classList.toggle('underline')
});

const btncolor = document.getElementById("bluebtn")
btncolor.addEventListener('click', function (event) {
    selectTextArea.classList.toggle('colorblue')
});

const btninc = document.getElementById("incbtn")
btninc.addEventListener('click', function (event) {
    let currentFontSize = getComputedStyle(selectTextArea).fontSize // '20px'
    currentFontSize = currentFontSize.replace('px', '') // '20'
    currentFontSize = Number(currentFontSize) // 20
    selectTextArea.style.fontSize = currentFontSize + 2 + 'px' // '22px'
});

const btndec = document.getElementById("decbtn")
btndec.addEventListener('click', function (event) {
    let currentFontSize1 = getComputedStyle(selectTextArea).fontSize // '20px'
    currentFontSize1 = currentFontSize1.replace('px', '') // '20'
    currentFontSize1 = Number(currentFontSize1) // 20
    selectTextArea.style.fontSize = currentFontSize1 - 2 + 'px' // '22px'
});       