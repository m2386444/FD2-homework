window.onload = function () {
    var inputLineElem = document.getElementsByClassName('line');
    for (var i=0; i<inputLineElem.length; i++) {
        var e = inputLineElem[i];
        e.className = 'lineMarginLeft line';
    }
    var devElem = document.getElementById('dev');
    var devMistElem = document.getElementById('devMist');

    var siteNameElem = document.getElementById('siteName');
    var siteNameMistElem = document.getElementById('siteNameMist');
    
    var siteUrlElem = document.getElementById('siteUrl');
    var siteUrlMistElem = document.getElementById('siteUrlMist');
    
    var startDateElem = document.getElementById('startTime');
    var startDateMistElem = document.getElementById('startTimeMist');
    
    var visitorsElem = document.getElementById('visitors');
    var visitorsMistElem = document.getElementById('visitorsMist');
    
    var emailElem = document.getElementById('email');
    var emailMistElem = document.getElementById('emailMist');
    
    var headingElem = document.getElementById('heading');
    var headingMistElem = document.getElementById('headingMist');
    
    var plan1Elem = document.getElementById('elem1');
    var plan2Elem = document.getElementById('elem2');
    var plan3Elem = document.getElementById('elem3');
    var plansMistElem = document.getElementById('plansMist');
    
    var reviewElem = document.getElementById('review');
    var reviewMistElem = document.getElementById('reviewMist');
    
    var descriptionElem = document.getElementById('description');
    var descriptionMistElem = document.getElementById('descriptionMist');
    
    var formElem = document.forms.targ;

    formElem.onsubmit = function () {
        var a = devValid();
        var b = siteNameValid();
        var c = siteUrlValid();
        var d = startDateValid();
        var e = visitorsValid();
        var f = emailValid();
        var g = headingValid();
        var h
        var i
        var j = descriptionValid();
        if (a&&b&&c&&d&&e&&f&&g&&j) {
            return true;
        } else {
            return false;
        }
    }

    function devValid () {
        if (devElem.value == '') {
            devShowMist();
            return false;
        } else {
            devElem.style.background = 'green';
            devMistElem.innerHTML = '';
            return true;
        }
    }
    function devShowMist () {
        devElem.style.background = 'red';
        devMistElem.innerHTML = 'Введите корректное значение!';
    }
devElem.onblur = devValid;

    function siteNameValid () {
        if (siteNameElem.value == '') {
            siteNameShowMist();
            return false;
        } else {
            siteNameElem.style.background = 'green';
            siteNameMistElem.innerHTML = '';
            return true;
        }
    }
    function siteNameShowMist () {
        siteNameElem.style.background = 'red';
        siteNameMistElem.innerHTML = 'Введите корректное значение!';
    }
siteNameElem.onblur = siteNameValid;

    function siteUrlValid () {
        if (siteUrlElem.value == '') {
            siteUrlShowMist();
            return false;
        } else {
            siteUrlElem.style.background = 'green';
            siteUrlMistElem.innerHTML = '';
            return true;
        }
    }
    function siteUrlShowMist () {
        siteUrlElem.style.background = 'red';
        siteUrlMistElem.innerHTML = 'Введите корректное значение!';
    }
siteUrlElem.onblur = siteUrlValid;

    function startDateValid () {
        if (startDateElem.value == '') {
            startDateShowMist();
            return false;
        } else {
            startDateElem.style.background = 'green';
            startDateMistElem.innerHTML = '';
            return true;
        }
    }
    function startDateShowMist () {
        startDateElem.style.background = 'red';
        startDateMistElem.innerHTML = 'Введите корректное значение!';
    }
startDateElem.onblur = startDateValid;

    function visitorsValid () {
        if (visitorsElem.value == '' || +visitorsElem.value < 0) {
            visitorsShowMist();
            return false;
        } else {
            visitorsElem.style.background = 'green';
            visitorsMistElem.innerHTML = '';
            return true;
        }
    }
    function visitorsShowMist () {
        visitorsElem.style.background = 'red';
        visitorsMistElem.innerHTML = 'Введите корректное значение!';
    }
visitorsElem.onblur = visitorsValid;

    function emailValid () {
        var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
        if (!r.test(emailElem.value)) {
            emailShowMist();
            return false;
        } else {
            emailElem.style.background = 'green';
            emailMistElem.innerHTML = '';
            return true;
        }
    }
    function emailShowMist () {
        emailElem.style.background = 'red';
        emailMistElem.innerHTML = 'Введите корректное значение!';
    }
emailElem.onblur = emailValid;

    function headingValid () {
        if (headingElem.value == '3' || headingElem.value == '1') {
            headingShowMist();
            return false;
        } else {
            headingElem.style.background = 'green';
            headingMistElem.innerHTML = '';
            return true;
        }
    }
    function headingShowMist () {
        headingElem.style.background = 'red';
        headingMistElem.innerHTML = 'На данный момент размещаем сайты только о доме и уюте!';
    }
headingElem.onblur = headingValid;
headingElem.onchange = headingValid;



function descriptionValid () {
    if (descriptionElem.value == '') {
        descriptionShowMist();
        return false;
    } else {
        descriptionElem.style.background = 'green';
        descriptionMistElem.innerHTML = '';
        return true;
    }
}
function descriptionShowMist () {
    descriptionElem.style.background = 'red';
    descriptionMistElem.innerHTML = 'Введите корректное значение!';
}
descriptionElem.onblur = descriptionValid;

/*     devElem.onblur = devValid;
    function devValid () {
        if (devElem.value == ''){
            devElem.style.background = 'red';
            devMistElem.innerHTML = 'Введите корректное значение!';
            devV = false;
        } else {
            devElem.style.background = 'none';
            devMistElem.innerHTML = '';
            devV = true;
        }
    }
    siteNameElem.onblur = siteNameValid;
    function siteNameValid () {
        if (siteNameElem.value == ''){
            siteNameElem.style.background = 'red';
            siteNameMistElem.innerHTML = 'Введите корректное значение!';
            snV = false;
        } else {
            siteNameElem.style.background = 'none';
            siteNameMistElem.innerHTML = '';
            snV = true;
        }
    }*/
/*     siteUrlElem.onblur = siteUrlValid;
    function siteUrlValid () {
        if (siteUrlElem.value == ''){
            siteUrlElem.style.background = 'red';
            siteUrlMistElem.innerHTML = 'Введите корректное значение!';
            suV = false;
        } else {
            siteUrlElem.style.background = 'none';
            siteUrlMistElem.innerHTML = '';
            suV = true;
        }
    }
    startDateElem.onblur = startDateValid;
    function startDateValid () {
        if (startDateElem.value == ''){
            startDateElem.style.background = 'red';
            startDateMistElem.innerHTML = 'Введите корректное значение!';
        } else {
            startDateElem.style.background = 'none';
            startDateMistElem.innerHTML = '';
        }
    }
    visitorsElem.onblur = visValid;
    function visValid () {
        if (visitorsElem.value == ''){
            visitorsElem.style.background = 'red';
            visitorsMistElem.innerHTML = 'Введите корректное значение!';
        } else if (+startDateElem.value < 0) {
            visitorsMistElem.innerHTML = 'слишком мало!';
        } else {
            visitorsElem.style.background = 'none';
            visitorsMistElem.innerHTML = '';
        }
    }
    emailElem.onblur = emailValid;
    function emailValid() {
        var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
        if (!r.test(emailElem.value)) {
            emailElem.style.background = 'red';
            emailMistElem.innerHTML = 'Введите корректное значение!';
        } else {
            emailElem.style.background = 'none';
            emailMistElem.innerHTML = '';
        }
    }
    headingElem.onchange = heaValid;
    function heaValid() {
        if (headingElem.value == '3'){
            headingElem.style.background = 'red';
            headingMistElem.innerHTML = 'Введите корректное значение!';
        } else {
            headingElem.style.background = 'none';
            headingMistElem.innerHTML = '';
        }
    }
    headingElem.onblur = headingElem.onchange;

    plan3Elem.onchange = plan3Valid;
    function plan3Valid () {
        if (plan3Elem.checked) {
            plansMistElem.innerHTML = 'Это дорого! Начните с малого!';
        } else {
            plansMistElem.innerHTML = '';
        }
    }
    plan1Elem.onchange = plan3Elem.onchange;
    plan2Elem.onchange = plan1Elem.onchange;

    reviewElem.onchange = revValid;
    function revValid () {
        if (reviewElem.checked) {
            reviewElem.style.background = 'none';
            reviewMistElem.innerHTML = '';
        } else {
            reviewElem.style.background = 'red';
            reviewMistElem.innerHTML = 'Разрешите отзывы!';
        }
    }
    descriptionElem.onblur = desValid;
    function desValid () {
        if (descriptionElem.value == ''){
            descriptionElem.style.background = 'red';
            descriptionMistElem.innerHTML = 'Не оставляйте поле пустым и введите корректное значение!';
        } else {
            descriptionElem.style.background = 'none';
            descriptionMistElem.innerHTML = '';
        }
    }
     */
}