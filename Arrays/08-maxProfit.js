function maxProfit(prices){
    let minPrice = Infinity;
    let maxprofit = 0;

    for(let price of prices){
        minPrice = Math.min(minPrice, price);
        maxprofit = Math.max(maxprofit, price - minPrice);
    }

    return [minPrice, maxprofit + minPrice, maxprofit];
}

console.log(maxProfit([7, 10, 1, 3, 6, 15, 2])); // returns as [buying price, selling price, maximum profir]