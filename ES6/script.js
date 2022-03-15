'use strict'

class Option {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        let div = document.createElement('div');
        div.className = "text";
        div.textContent = "Hello world!";

        div.style.height = this.height + 'px';
        div.style.width = this.width + 'px';
        div.style.background = this.bg;
        div.style.fontSize = this.fontSize + 'px';
        div.style.textAlign = this.textAlign;

        document.body.append(div);
    }
}

let div = new Option('200', '200', '#49eb34', '25', 'center');
div.createDiv();