function positivNum(a, b){
    var c;
    if(a >= 0 && b >=0){
        c = a - b;
        alert(c);
    }
    else if( (a < 0 && b > 0) || (a > 0  && b < 0)){
        c = a + b;
        alert(c);
    }
    else{ 
        c = a * b;
        alert(c);
    }
}   


var a,b;
a = parseInt(Math.random() * 100 - 50);
b = parseInt(Math.random() * 100 - 50);
positivNum(a,b);
