function resizeLinear(a, scaling, sub){
  for (var i = 0; i < a.length; i++) {
    a = (a - (scaling/2)) * sub + scaling*2; 
  }

  return a
}
