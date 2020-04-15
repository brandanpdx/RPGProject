const euler =  function(startingNumber, result = 0, counter = 0) {
  if (counter >= startingNumber) {
    return result; 
  } else if (counter % 3 === 0 || counter % 5 === 0) {
   const newResult = Math.floor(result += counter);
    return euler(startingNumber, newResult, counter +1);
  }
  else {
    return euler(startingNumber, result, counter +1);
  }
}

// euler(1000);

// > 233168


