var storeBag=[
    {
        name: "drass",
        price: "100"
    },
    {
        name: "jeans",
        price: "150"
    },
    {
        name: "sneakers",
        price: "200"
    }

];

var sum=0;
for(var i=0; i<storeBag.length;i++){
    sum += parseInt(storeBag[i].price);
}
alert("Сумма товаров: "+sum);
