//Largest prime factor

/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/ 
var num=600851475143;
var i;
for(i=2;i<=num;i++)
{
    if(num%i==0)
    {
        num/=i;
        i--;
    }
}

console.log(i);