var animal = 'cat'

function myAnimal() {
  var animal = 'dog' //declares 'dog' as variable that is specific to this function
  return animal
}

function yourAnimal() {
  return animal //uses variable declared outside of the function stated above
}

function add2(n) {
  return (n+2)
}

function funkyFunction() {
  return theFunk
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
function theFunk(){
  return string === "FUNKY!"
}
