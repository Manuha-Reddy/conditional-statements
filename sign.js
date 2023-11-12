function sign(a,b,c){
  var mul = a*b*c;
  if (mul > 0){
    alert ("positive")
  }
  else if (mul < 0){
    alert ("negative")
  }
  else {
    alert ("zero");
  }
  }
  var mul1 = sign(1,2,3);
  document.write(mul1)
