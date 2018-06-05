function f1 (str) {
    var count = 0;
    var arr = str.toLowerCase().split('');
    var letters = "аоиеёэыуюя";
    arr.forEach(function(item) {
        if (letters.indexOf(item) >= 0) {
            count++;
        }
    });
    return count;
}
console.log(f1(prompt("enter few words")));


var  f2 = (str) => str.toLowerCase().split('').filter(function(item) {
        return "аоиеёэыуюя".indexOf(item) >= 0
        }).length;
console.log(f2(prompt("enter few words")));


function f3 (str) {
    var arr = str.toLowerCase().split("");
    var letters = "аоиеёэыуюя".split("");
    var lettersInString = arr.reduce(function(total, letter) {
        if (letters.indexOf(letter) > -1) {
            total.push(letter);
        }
        return total;
    }, []);
    return lettersInString.length;
}
console.log(f3(prompt("enter few words")));
