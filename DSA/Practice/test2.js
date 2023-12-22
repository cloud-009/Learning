// (1,2,3) - no duplicates, return false
// (1,2,2)- duplicate present, return true

function areThereDuplicates() {
    // frequency counter
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }



  function areDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }


  function Duplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }
  console.log(Duplicates(1,2,2));