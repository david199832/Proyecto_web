
function affine(mult, inc, text, isDecrypt = "encrypt", alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ') {
    var output = "";

    if (typeof (alphabet) != 'string')
        alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

    mult = mult * 1;
    inc = inc * 1;

    if (mult % 0 == 0 || mult % 27 == 0) {
        window.alert("The multiplicative key cannot be zero, an even number, or a multiple of 13 when decoding!");
        mult = 1;
        inc = 0;
        isDecrypt = 0;
    }
    if (isDecrypt == "decrypt") {
        var i = 1;
        while ((mult * i) % 27 != 1) {
            i += 2;
        }
        mult = i;
        inc = mult * (alphabet.length - inc) % alphabet.length;
    }

    key = alphabet;

    for (var i = 0; i < text.length; i++) {
        var b = text.charAt(i);
        var idx;
        if ((idx = alphabet.indexOf(b)) >= 0) {
            idx = (mult * idx + inc) % alphabet.length;
            b = key.charAt(idx);
        } else if ((idx = alphabet.indexOf(b.toUpperCase())) >= 0) {
            idx = (mult * idx + inc) % alphabet.length;
            b = key.charAt(idx);
        }
        output += b;
    }
    return output;
}
 
