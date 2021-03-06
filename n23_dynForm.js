'use strict';

var ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
var stringName1 = 'masharovDynFormFormDef1';
var stringName2 = 'masharovDynFormFormDef2';

var formDef1 = [];
var formDef2 = [];
// var formDef2 = [
//   {label:'Фамилия:',kind:'longtext',name:'lastname'},
//   {label:'Имя:',kind:'longtext',name:'firstname'},
//   {label:'Отчество:',kind:'longtext',name:'secondname'},
//   {label:'Возраст:',kind:'number',name:'age'},
//   {label:'Зарегистрироваться:',kind:'submit'},
// ];
// var formDef1=
// [
//   {label:'Название сайта:',kind:'longtext',name:'sitename'},
//   {label:'URL сайта:',kind:'longtext',name:'siteurl'},
//   {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
//   {label:'E-mail для связи:',kind:'shorttext',name:'email'},
//   {label:'Рубрика каталога:',kind:'combo',name:'division',
//     variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
//   {label:'Размещение:',kind:'radio',name:'payment',
//     variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
//   {label:'Разрешить отзывы:',kind:'check',name:'votes'},
//   {label:'Описание сайта:',kind:'memo',name:'description'},
//   {label:'Опубликовать:',kind:'submit'},
// ];
        
    // $.ajax( {
    //     url: ajaxHandlerScript, type:'POST', dataType:'json', cache: false, data:{f:'INSERT', n: 'masharovDynFormFormDef1', v: JSON.stringify(formDef1)},
    //     success:function () {console.log('insert ok')}, error:function () {alert('error')} }
    // );
    // $.ajax( {
    //     url: ajaxHandlerScript, type:'POST', dataType:'json', cache: false, data:{f:'INSERT', n: 'masharovDynFormFormDef2', v: JSON.stringify(formDef2)},
    //     success:function () {console.log('insert ok')}, error:function () {alert('error')} }
    // );
    $.ajax( {
        url: ajaxHandlerScript, type:'POST', dataType:'json', cache: false, data:{f:'READ', n: stringName1},
        success:gotForm1, error:function () {alert('error')} }
    );
    $.ajax( {
        url: ajaxHandlerScript, type:'POST', dataType:'json', cache: false, data:{f:'READ', n: stringName2},
        success:gotForm2, error:function () {alert('error')} }
    );
        
    function gotForm1 (callresult) {
        formDef1 = JSON.parse(callresult.result)
        makeForm(formElement, formDef1);
    }
    function gotForm2 (callresult) {
        formDef2 = JSON.parse(callresult.result)
        makeForm(formElement, formDef2);
    }
        


var formElement = document.forms.targ;

function makeForm (frm, arr) {
//    frm.innerHTML = '';
    for (var i=0; i<arr.length; i++) {
        var txt = '<span>'+arr[i]['label']+'</span>';
        if (arr[i]['kind'] == 'longtext') {
            frm.innerHTML += txt + '<input type="text" '+'name="'+arr[i]['name']+'" style="width: 80%"/><br/>'
        } else if (arr[i]['kind'] == 'number') {
            frm.innerHTML += txt + '<input type="text" '+'name="'+arr[i]['name']+'" style="width: 10%"/><br/>'
        } else if (arr[i]['kind'] == 'shorttext') {
            frm.innerHTML += txt + '<input type="text" '+'name="'+arr[i]['name']+'" style="width: 50%"/><br/>'
        } else if (arr[i]['kind'] == 'submit') {
            frm.innerHTML += '<input type="submit" value="' + arr[i]['label'].slice(0, -1) + '"' + '/><br/><hr/>'
        } else if (arr[i]['kind'] == 'combo') {
            var opt = '';
            for (var n=0; n<arr[i]['variants'].length; n++) {
                if (n == arr[i]['variants'].length - 1) {
                    opt += '<option selected value="' + arr[i]['variants'][n]['value'] + '">'+arr[i]['variants'][n]['text']+'</option>';
                    break;
                }
                opt += '<option value="' + arr[i]['variants'][n]['value'] + '">'+arr[i]['variants'][n]['text']+'</option>';
            }
            frm.innerHTML += txt + '<select '+'name="'+arr[i]['name']+'">'+opt+'</select><br/>';
        } else if (arr[i]['kind'] == 'radio') {
            var rad = '';
            for (var j=0; j<arr[i]['variants'].length; j++) {
                rad += '<input type="radio" '+'name="'+arr[i]['name']+'" value="' + arr[i]['variants'][j]['value'] + '">'+arr[i]['variants'][j]['text']+'</radio>';
            }
            frm.innerHTML += txt + rad + '<br/>';
        } else if (arr[i]['kind'] == 'check') {
            frm.innerHTML += txt + '<input type="checkbox" checked '+'name="'+arr[i]['name']+'"/><br/>'
        } else if (arr[i]['kind'] == 'memo') {
            frm.innerHTML += txt + '<br/><textarea style="width: 80%" name="'+arr[i]['name']+'"></textarea><br/>'
        }
    }
return
}


