/* function f1 () {
    var str = prompt('Enter any words here');
    var count = 0;
    var letters = "аоиеёэыуюя";
    for (var i=0; i<str.length; i++) {
        if (letters.indexOf(str[i]) >= 0) {
            count += 1;
        } else {
            continue;
        }
    }
    return count;
}
console.log(f1());
 */

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
