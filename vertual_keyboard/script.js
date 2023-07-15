

function writekeyboard(c){
    var output = document.getElementById('output');
    output.value += c;
}


function backSpace(){
    const output = document.getElementById('output');
    output.value = output.value.slice(0,-1);
}



// ... existing code ...
function toggleEmojiKeyboard() {
  var keyboard = document.querySelectorAll('.key');
  keyboard.forEach(function(element) {
    if (element.textContent === 'Q') {
      element.textContent = '😀';
    } if (element.textContent === 'W') {
      element.textContent = '😁'
    }
    if (element.textContent === 'E') {
      element.textContent = '😅';
    } if (element.textContent === 'R') {
      element.textContent = '🤣'
    }

    if (element.textContent === 'T') {
      element.textContent = '😇';
    } if (element.textContent === 'Y') {
      element.textContent = '😍'
    }

    if (element.textContent === 'U') {
      element.textContent = '🤓';
    } if (element.textContent === 'I') {
      element.textContent = '😎'
    }

    if (element.textContent === 'O') {
      element.textContent = '🥸';
    } if (element.textContent === 'P') {
      element.textContent = '🤩'
    }

    if (element.textContent === 'A') {
      element.textContent = '😝';
    } if (element.textContent === 'S') {
      element.textContent = '🥳'
    }

    if (element.textContent === 'D') {
      element.textContent = '😖';
    } if (element.textContent === 'F') {
      element.textContent = '😫'
    }

    if (element.textContent === 'G') {
      element.textContent = '🥺';
    } if (element.textContent === 'H') {
      element.textContent = '😢'
    }
    if (element.textContent === 'J') {
      element.textContent = '👿';
    } if (element.textContent === 'K') {
      element.textContent = '👾'
    }
    if (element.textContent === 'L') {
      element.textContent = '👽';
    } if (element.textContent === ';') {
      element.textContent = '💩'
    }
    if (element.textContent === '"') {
      element.textContent = '🥶';
    } if (element.textContent === 'Z') {
      element.textContent = '🥵'
    }
    if (element.textContent === 'X') {
      element.textContent = '🤬';
    } if (element.textContent === 'C') {
      element.textContent = '🖕'
    }
    if (element.textContent === 'V') {
      element.textContent = '🙏';
    } if (element.textContent === 'B') {
      element.textContent = '👀'
    }
    if (element.textContent === 'N') {
      element.textContent = '🩸';
    } if (element.textContent === 'M') {
      element.textContent = '💋'
    }
    if (element.textContent === ',') {
      element.textContent = '🕸';
    } if (element.textContent === '.') {
      element.textContent = '🐦'
    }
   if (element.textContent === '?') {
    element.textContent = '🐝'
  }
     else {
      
    }
  });
}
