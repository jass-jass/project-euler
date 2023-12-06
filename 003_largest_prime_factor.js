function largestPrimeFactor(number) 
{
  let factor =2, temp = number, i;
  for(i = factor; i<= number; i++)
  {
    while(temp%i==0)
    {
      temp /= i;
      factor = i;
    }
  }
  return factor;
}

largestPrimeFactor(13195);
