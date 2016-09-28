var  arrayOfStockPrices =  [1.42, 1.32, 1.45, 1.20, 1.34, 1.74, 1.10, 1.89, 1.42, 1.90] ;
var text = '';
var lowprice = 99999999999;
var highprice = 0;

function showBiggestProfit(array){

    for (i = 0; i < array.length; i++) {

        if ( array[i] > highprice ) {
            highprice = array[i];
        }

        if ( array[i] < lowprice ) {
            lowprice = array[i];
        }


    }
    console.log('the high price is ' + highprice);
    console.log('the low price is ' + lowprice);

    var biggestProfit = highprice - lowprice;


    document.getElementById("app").innerHTML = biggestProfit * 10000;

}

showBiggestProfit(arrayOfStockPrices);