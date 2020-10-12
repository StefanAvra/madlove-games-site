let i = 0;
let txt = 'Hi.\0\0\0\0\0\0\0\0\0\nWe make video games for fun.';
let speed = 50;
let cursor = false;

function typeWriter() {
    if (i < txt.length) {
        if (txt[i] === '\n') {
            char = '<br>'
        } else if (txt[i] === '\0') {
            char = ''
        } else {
            char = txt[i]
        }
        document.getElementById("typewriter-heading").innerHTML += char;
        i++;
        setTimeout(typeWriter, speed);
    } else {
        document.getElementById("typewriter-heading").innerHTML += '<span class="blink">▇</span>';
    }
}

function address() {

}