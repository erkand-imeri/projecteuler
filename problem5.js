//Smallest multiple

/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
 


function LCM(A)  
{   
    var n = A.length, a = A[0];
    for (var i = 1; i < n; i++)
     { var b =A[i], c = a;
       while (a && b){ a > b ? a %= b : b %= a; } 
       a = (c*A[i])/(a+b);
     }
    return a;
}



console.log(LCM([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));