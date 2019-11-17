

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
    
// hello

function finalPosition (moves) {
  var x =0;
  var y = 0;
  
  for ( var move of moves) {
    if (move=="north"){
      y++;
    }
    else if (move=="south"){
      y--;
    }
    else if (move=="east"){
      x++;
    }
    else{
      x--;
    }

  }
  var data = Array(x,y)
  return data
}

finalPosition(moves);