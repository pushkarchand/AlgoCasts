function findStartingPoint(trips){
  const startTrip = trips.reduce((acc, curr) =>{
    console.log(acc);
    return acc.concat(curr)})
    .filter((e, i, arr) =>{ 
      console.log(e,i,arr);
      if(arr.indexOf(e) == arr.lastIndexOf(e)){
        return arr;
      }});
  console.log(startTrip)
  const startTripIndex = trips.findIndex(([e]) =>{
        console.log(e)
        if(startTrip.includes(e)){
        return startTrip.includes(e)
        }
    });
  return trips[startTripIndex][0];
}
findStartingPoint([["c","d"],["a","b"],["b","c"]])
