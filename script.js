function power(val,pow){
    if(pow>1){
        
        val *= val;
        pow--;
        power(val,pow);
    }
    return val;
}
var val, pow;
val = +prompt("Введите число: ");
pow = +prompt("Введите степень: ");
alert(power(val,pow));