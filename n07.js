function f1 (str) {
    var count = 0;
    var letters = "аоиеёэыуюя";
    for (var i=0; i<str.length; i++) {
        if (letters.indexOf(str.toLowerCase()[i]) >= 0) {
            count += 1;
        } else {
            continue;
        }
    }
    return count;
}
console.log(f1(prompt('enter string')));



function f2 () {
var s = prompt("enter string").toLowerCase();
var count = 0;
function ff (str) {
    var letters = "аоиеёэыуюя";
    if (str.length) {
        if (letters.indexOf(str[0]) >= 0) {
            count += 1;
            ff(str.substr(1));
        } else {
            ff(str.substr(1));
        }
    }
    return count;
}
return ff(s);
}
console.log(f2());