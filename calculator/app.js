// calculator program

let x = "";
function refresh() {
    let number = '0123456789';
    keyvalue = "";
    for (let i = 0; keyvalue.length<10; i++) {
        random =Math.round(Math.random()*10);
        if (keyvalue.indexOf(random)>-1) 
        continue;
        keyvalue+=number.substring(random, random+1);
    }

    counter =-1;
    while (counter < 10) {
        counter++;
        document.querySelector('#num' +counter).value=keyvalue[counter];
    }
}

function clickbutton(btn) {
    show(x+=btn);
}

function show(btn) {
    textvalue.value=btn;
}

function reset() {
    show(x = x.substring(0,x.length-1));
}
