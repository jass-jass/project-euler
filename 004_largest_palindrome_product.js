function isPal(num)
{
  let rev = 0, temp = num;
  rev = num.toString().split('').reverse().join('');
  if (rev == num)
  {
    return 1;
  }
  return 0;
}

function largestPalindromeProduct(n) 
{
  let i=1, j, llv=0, ulv=0, largest = 0, product = 0, pal =0;
  llv = Math.pow(10, n-1);
  ulv = Math.pow(10, n);
  for(i= (llv+1); i<ulv; i++)
  {
    for(j=i; j<ulv; j++)
    {
      product = i*j;
      if (isPal(product))
      {
        if (largest < product)
        {
          largest = product;
        }
      }
    }
  }

  return largest;
}

largestPalindromeProduct(3);
