//Largest palindrome product

/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
 */

function isPalindrome(x) {
    var pal = parseInt(x.toString().split('').reverse().join(''));

    if (pal === x)
        return true;
    else
        return false;
}
function largestPalindrome()
{
var x, y, product, max = 0;

for (x = 100; x <= 999; x++) {
    for (y = x; y <= 999; y++) {
        product = x * y;
        if (isPalindrome(product)) {
          if( max < product ) { // this is new
            max = product;
            
          }
        }
    }
}
return max;
}

console.log(largestPalindrome());