let strengthBar=0;
document.querySelector("#copy").addEventListener("click", function() {
    let text = document.querySelector("#Password").innerText;
    let textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
});
let value=10;
document.querySelector("#slider").addEventListener("input", function() {
    value = this.value;
    document.querySelector(".length h3").innerText = value; 
    
});
function generateRandomString(n) {
    let characters = '';
    if (document.querySelector("#uppercase").checked) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        strengthBar++;
    }
    if (document.querySelector("#lowercase").checked) {
        characters += 'abcdefghijklmnopqrstuvwxyz';
        strengthBar++;
    }
    if (document.querySelector("#numbers").checked) {
        characters += '0123456789';
        strengthBar++;
    }
    if (document.querySelector("#symbols").checked) {
        characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
        strengthBar++;
    }
    
    let result = '';
    for (let i = 0; i < n; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

document.querySelector("#generate").addEventListener("click", function() {
    let randomString = generateRandomString(value);
    document.querySelector("#Password").innerText = randomString;
    if (value>0 && value<=5) {
        strengthBar++;
    } else if (value>5 && value<=10){
        strengthBar+=2;
    } else if (value>10 && value<=15){
        strengthBar+=3;
    } else {
        strengthBar+=4;
    }
    strengthChecker(strengthBar);
    strengthBar=0;
});



let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let strengthText = document.querySelector('.strength-text');
function strengthChecker(num) {

    
    
    one.classList.remove('theBlack');
    two.classList.remove('theBlack');
    three.classList.remove('theBlack');
    four.classList.remove('theBlack');
    strengthText.innerText = 'WEAK';
    if(document.querySelector('#uppercase').checked || document.querySelector('#lowercase').checked || document.querySelector('#numbers').checked || document.querySelector('#symbols').checked) {
        if(num <= 2 ) {
            one.classList.add('theBlack');
            strengthText.innerText = 'WEAK';
        } else if(num >= 2 && num < 4) {
            one.classList.add('theBlack');
            strengthText.innerText = 'MEDIUM';
        } else if(num >= 4 && num < 6) {
            one.classList.add('theBlack');
            two.classList.add('theBlack');
            strengthText.innerText = 'MEDIUM';
        } else if(num >= 6 && num < 8) {
            one.classList.add('theBlack');
            two.classList.add('theBlack');
            three.classList.add('theBlack');
            strengthText.innerText = 'STRONG';
        } else {
            one.classList.add('theBlack');
            two.classList.add('theBlack');
            three.classList.add('theBlack');
            four.classList.add('theBlack');
            strengthText.innerText = 'STRONG';
        }
    }
    
}

