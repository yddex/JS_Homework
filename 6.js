function Operation(a,b,op){
    switch(op){
        case "+": return a + b;
        break;
        case "-": return a - b;
        break;
        case "*": return a * b;
        break;
        case "/": return a / b;
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
