function Sum(a,b){
    return a + b;
}
function Vch(a,b){
    return a - b;
}
function Pr(a,b){
    return a * b;
}
function del(a,b){
    if(b!=0){
    return a / b;
    }
    else alert("На ноль делить нельзя!");
}

function Operation(a,b,op){
    switch(op){
        case "+": Sum(a,b);
        break;
        case "-": Vch(a,b);
        break;
        case "*": Pr(a,b);
        break;
        case "/": del(a,b);
        break;
        default: return "Введите корректный знак операции";
        break;
    }
}
var a,b,op;
a = +prompt("Введите первое число: ");
b = +prompt("Введите второе число: ");
op = prompt("Введите знак операции: ");
alert(Operation(a,b,op));
