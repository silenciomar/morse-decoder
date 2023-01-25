const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' '
};

function decode(expr) {
    let arr = [];
    let newArr = []
    for(let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10))
    }
    
    arr.forEach((elem) => {
      let letter = '';
      elem === '**********' ? letter += ' ' : null;
      for(let i = 0; i < elem.length; i+=2) {
        
      elem.slice(i, i + 2) === '10' ? letter += '.' : null;
      elem.slice(i, i + 2) === '11' ? letter += '-' : null;
      }
      newArr.push(MORSE_TABLE[letter])
    })
    return newArr.join('')
}

module.exports = {
    decode
}