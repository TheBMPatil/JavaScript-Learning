// var n1 = 5;
// var n2 = 7;

// console.log(n1 + n2);
var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log("DisCount Percent is : " + discountPercent);

console.log(Math.round(discountPercent) + "% Off");
