function greet (name, owner) {
  if (name === owner){
    return ("Hello boss")
  } else{
    return ("Hello guest")
  }
}

const isBoss = greet("Nicolas", "Nicolas")