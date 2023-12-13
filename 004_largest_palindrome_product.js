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
  let i=1, j, lv=0, largest = 0, product = 0, pal =0;
  while(i<n)
  {
    lv = lv*10 + 90;
    i++;
  }
  lv ++;
  for(i= lv; i<lv+9; i++)
  {
    for(j=i; j<lv+9; j++)
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

print(largestPalindromeProduct(3));
