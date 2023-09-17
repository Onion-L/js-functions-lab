fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    let count;
    const completed = json.reduce((acc,curr) => {
      if(curr.completed){
        const {userId} = curr;
        if(!acc[userId]){
          count = 0;
          acc[userId] = count;
        }
        acc[userId] = ++count;
      }
      return acc;
    },{});
    console.log(completed);
  })
  .catch(function(err) { 
    console.log(err);
  });