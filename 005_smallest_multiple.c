function gcd(a, b)
{
  let i;
  for(i=Math.min(a, b); i>0; i--)
    if(a%i==0 && b%i==0)
        return i;
}

function smallestMult(n) 
{
  let multiple = 1, i;
  for(i=2; i<=n; i++)
    multiple = (multiple*i)/gcd(multiple, i);
  return multiple;
}

print(smallestMult(13));
