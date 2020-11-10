var i=1;
while(i<=100){
    var j=1;
    var col=0;
    while(j<=i){
        if(i%j==0){
            col++;
        }
        j++;
    }
    if(col==2){
        document.write(i+" ");
    }
    i++;
}
