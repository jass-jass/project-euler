function largestPrimeFactor(number) 
{
  let factor =0, temp = number, i;
  for(i = 2; i<= Math.sqrt(number); i++)
  {
    while(temp%i==0)
    {
      temp /= i;
      factor = i;
    }
  }
  if (!factor)
  {
    return number;
  }
  return factor;
}

largestPrimeFactor(13195);
