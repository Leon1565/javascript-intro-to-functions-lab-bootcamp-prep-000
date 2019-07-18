function shout(string)
{
  return string.toUpperCase()
}
function whisper(string)
{
  return string.toLowerCase()
}
function logShout(string)
{
  console.log(string.toUpperCase())
}
function logWhisper(string)
{
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string)
{
  var iCanHearYou = 'YES INDEED!'
  var iCantHearYou = 'I can\'t hear you!'
  if(string !== iCanHearYou.toUpperCase)
  {
    return iCanHearYou
  }
  else if(string !== iCantHearYou.toUpperCase)
  {
    return iCantHearYou
  }
}