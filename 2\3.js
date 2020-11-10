function countBasketPrice(arr){
    var sum=0;
    for(var i=0; i<arr.length;i++){
        sum += parseInt(arr[i].price);
    }
    return sum;
}

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

alert("Сумма товаров: "+countBasketPrice(storeBag));
