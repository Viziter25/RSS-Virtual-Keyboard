/*jshint esversion: 11 */

let keyboardEng = [ 96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, '', 9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 'del', '', 20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13, '', 16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38, 16, '', 17, 'win', 18, 32, 18, 37, 40, 'right', 17];

let keyboardRu = [ 1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, '', 9, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92, 'del', '', 20, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 13, '', 16, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46, 38, 16, '', 17, 'win', 18, 32, 18, 37, 40, 'right', 17];
// let arr = [];
// document.onkeypress = (event => {
//     arr.push(event.charCode);
//     console.log(arr);
// });

const container = document.createElement('div');
container.classList.add('container');
document.body.prepend(container);

const input1 = document.createElement('textarea');
input1.classList.add('input');
container.append(input1);

const div = document.createElement('div');
div.id ='keyboard';
container.append(div);

const p = document.createElement('p');
const p1 = document.createElement('p');
p.innerHTML = 'Клавиатура создана в операционной системе Windows';
p1.innerHTML = 'Для переключения языка комбинация: ctrl + alt';
container.append(p);
container.append(p1);

const input = document.querySelector('.input');
function init(keyboard) {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        if (i == 14 || i == 30 || i == 44 || i == 58 || i == 70) {
            out += '<div class = "clearfix"></div>';
        } else if (keyboard[i] == '8') {
            out += '<div class = "backspace" data = "' + keyboard[i] + '" id = "backspace">' + 'Backspace' + '</div>';
        } else if (keyboard[i] == '9') {
            out += '<div class = "tab" data = "' + keyboard[i] + '" id = "tab">' + 'Tab' + '</div>';
        } else if (keyboard[i] == 'del') {
            out += '<div class = "del" data = "' + keyboard[i] + '" id = "del">' + 'Del' + '</div>';
        } else if (keyboard[i] == '20') {
            out += '<div class = "caps_lock" data = "'+ keyboard[i] +'" id = "caps_lock">' + 'Caps lock' + '</div>';
        } else if (keyboard[i] == '13') {
            out += '<div class = "enter" data = "'+ keyboard[i] +'" id = "enter">' + 'Enter' + '</div>';
        } else if (keyboard[i] == '32') {
            out += '<div class = "space" data = "'+ keyboard[i] +'" id = "space">' + 'Space' + '</div>';
        } else if (keyboard[i] == '16') {
            out += '<div class = "shift" data = "'+ keyboard[i] +'" id = "shift">' + 'Shift' + '</div>';
        } else if (keyboard[i] == '38') {
            out += '<div class = "up" data = "'+ keyboard[i] +'" id = "up">' + '^' + '</div>';
        } else if (keyboard[i] == '17') {
            out += '<div class = "ctrl" data = "'+ keyboard[i] +'" id = "ctrl">' + 'Ctrl' + '</div>';
        } else if (keyboard[i] == 'win') {
            out += '<div class = "win" data = "'+ keyboard[i] +'" id = "win">' + 'Win' + '</div>';
        } else if (keyboard[i] == '18') {
            out += '<div class = "alt" data = "'+ keyboard[i] +'" id = "alt">' + 'Alt' + '</div>';
        } else if (keyboard[i] == '37') {
            out += '<div class = "left" data = "'+ keyboard[i] +'" id = "left">' + '<' + '</div>';
        } else if (keyboard[i] == '40') {
            out += '<div class = "down" data = "'+ keyboard[i] +'" id = "down">' + '^' + '</div>';
        } else if (keyboard[i] == 'right') {
            out += '<div class = "right" data = "'+ keyboard[i] +'" id = "right">' + '>' + '</div>';
        } else {
            out += '<div class = "k-key" data = "' + keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</div>';
        } 
        
        
    }
    document.querySelector('#keyboard').innerHTML = out;
}
init(keyboardEng);

let langEn = true;
let shiftPressed = false;
const buttons = document.querySelectorAll('.k-key');
const shift = document.querySelectorAll('#shift');
const up = document.querySelector('#up');
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const down = document.querySelector('#down');
const del = document.querySelector('#del');
const capsLock = document.querySelector('#caps_lock');
const tab = document.querySelector('#tab');
const space = document.querySelector('#space');
const enter = document.querySelector('#enter');
const ctrl = document.querySelectorAll('#ctrl');
const alt = document.querySelectorAll('#alt');
const win = document.querySelector('#win');



//capsLock
capsLock.addEventListener('click', () => {
    capsLock.classList.toggle('active');
    console.log(capsLock.classList[1]);
    buttons.forEach((item) => {
        if (capsLock.classList[1] == 'active') {
            item.innerHTML = item.innerHTML.toUpperCase();
        } else {
            item.innerHTML = item.innerHTML.toLowerCase();
        }
    });
});



// tab
tab.addEventListener('click', (event) => {
    tab.classList.add('active');
    setTimeout(() => {
        tab.classList.remove('active');
    }, 200);
    input.value = input.value + '   ';
});


// space
space.addEventListener('click', () => {
    space.classList.add('active');
     setTimeout(() => {
        space.classList.remove('active');
    }, 200);
    input.value = input.value + ' ';
});


// enter
enter.addEventListener('click', () => {
    enter.classList.add('active');
     setTimeout(() => {
        enter.classList.remove('active');
    }, 200);
    input.value = input.value + '\n';
});


//arrows
up.addEventListener('click', () => {
    input.value = input.value + up.innerHTML;
});
left.addEventListener('click', () => {
    console.log(left.innerHTML);
    input.value = input.value + left.innerHTML;
});
right.addEventListener('click', () => {
    input.value = input.value + right.innerHTML;
});
down.addEventListener('click', () => {
    input.value = input.value + down.innerHTML;
});


// backspace
backspace.addEventListener('click', () => {
    let arrayDel = [];
    arrayDel = (input.value).split('');
    arrayDel.pop();
    input.value = arrayDel.join('');
});



document.onkeypress = function (event) {
    
    // console.log(event.code);
    // console.log(event.key);
    document.querySelectorAll('#keyboard .k-key').forEach(element => {
        if (event.key == element.innerHTML) {
            element.classList.add('active');
        } 
        
    });
    console.log(event.code);
    if (event.key == 'Enter') {
        input.value = input.value + '\n';
    } else {
        input.value = input.value + event.key;
    }
   
};

document.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.key == 'Backspace') {
        let arrayDel = [];
        arrayDel = (input.value).split('');
        arrayDel.pop();
        input.value = arrayDel.join('');
    }
    document.querySelectorAll('#keyboard .k-key').forEach(element => {
        element.classList.remove('active');
    });
});


document.querySelectorAll('#keyboard .k-key').forEach(function(element) {
    element.onclick = function (event) {
        document.querySelectorAll('#keyboard .k-key').forEach(element => {
            element.classList.remove('active');
            setTimeout(() => {
                element.classList.remove('active');
            }, 200);
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
        input.value = input.value + element.innerHTML;
    };
});



document.addEventListener("keyup", function(event) {
    // console.log(event.keyCode);
    if (event.keyCode == 18 && shiftPressed) {
        langEn = !langEn;
        init(langEn ? keyboardEng : keyboardRu);
    }
    if(event.keyCode == 32) {
    space.classList.remove('active');
    }
    if(event.keyCode == 16) {
       shift.forEach((item) => {
           item.classList.remove('active');
       });
    }
    if(event.keyCode == 17) {
       ctrl.forEach((item) => {
           item.classList.remove('active');
       });
    }
    if(event.keyCode == '91') {
       win.classList.remove('active');
    }
    if(event.keyCode == '18') {
        alt.forEach((item) => {
            item.classList.remove('active');
        });
    }
    if(event.keyCode == 13) {
       enter.classList.remove('active');
   }
   if(event.keyCode == 46) {
       del.classList.remove('active');
   }
   if(event.keyCode == 8) {
       backspace.classList.remove('active');
   }
    if(event.keyCode == 38) {
       up.classList.remove('active');
   }
   if(event.keyCode == 37) {
       left.classList.remove('active');
   }
   if(event.keyCode == 40) {
       down.classList.remove('active');
   }
   if(event.keyCode == 39) {
       right.classList.remove('active');
   }

  if(event.keyCode == 9) {
    input.value = input.value + '   ';
    tab.classList.remove('active');
  }
  buttons.forEach((item) => {
    if (event.getModifierState("CapsLock")) {
    capsLock.classList.add('active');
    item.innerHTML = item.innerHTML.toUpperCase();
    } else {
    capsLock.classList.remove('active');
    item.innerHTML = item.innerHTML.toLowerCase();
    }
  });
});

input.addEventListener('keydown', (event) => {
    if (event.keyCode == 9) {
        event.preventDefault();
    }
});

document.addEventListener('keydown', (event) => {

   if (event.key == 'Control') {
       shiftPressed = true;
   }
   if(event.keyCode == 32) {
       space.classList.add('active');
   }
   if(event.keyCode == 9) {
       tab.classList.add('active');
   }
   if(event.keyCode == 16) {
       shift.forEach((item) => {
           item.classList.add('active');
       });
   }
   if(event.keyCode == 17) {
       ctrl.forEach((item) => {
           item.classList.add('active');
       });
   }
   if(event.keyCode == '91') {
       win.classList.add('active');
   }
   if(event.keyCode == '18') {
       alt.forEach((item) => {
        item.classList.add('active');
       });
   }
   if(event.keyCode == 13) {
       enter.classList.add('active');
   }
   if(event.keyCode == 46) {
       del.classList.add('active');
   }
   if(event.keyCode == 8) {
       backspace.classList.add('active');
   }
   if(event.keyCode == 38) {
       up.classList.add('active');
   }
   if(event.keyCode == 37) {
       left.classList.add('active');
   }
   if(event.keyCode == 40) {
       down.classList.add('active');
   }
   if(event.keyCode == 39) {
       right.classList.add('active');
   }

});
