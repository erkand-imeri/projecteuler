//10001st prime

/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

*/ 
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

function stprimenumber()
{
    var count=0;

    var num=2;
var found=false;
    while(found===false)
    {
       if(isPrime(num))
       {
           count++;
       }

       if(count===10001)
       {
           break;
       }
       num++; 
    }
return num;
}


console.log(stprimenumber());