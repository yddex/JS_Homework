<script>
function NumObj(number){
    var correct = false;
    
    if(number>999 || isNaN(number) || number<0){
        alert("Введите число от 0 до 999")
    }
    else{
        this.sot=parseInt(number/100);
        this.des=parseInt((number-this.sot*100)/10);
        this.ed=parseInt(number-this.sot*100-this.des*10);
        correct = true;
    }

}
var num = +prompt("Введите число от 0 до 999:");
var obj = new NumObj(num);
console.log("Сотни: "+obj.sot+"\nДесятки: "+obj.des+"\nЕдиницы: "+obj.ed);
</script>
