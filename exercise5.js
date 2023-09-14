fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json.reduce((initialArr, currentTodo) => {
      if(!currentTodo.completed) {
        initialArr.push(currentTodo.title);
      }
      return initialArr;
    },[]);
    console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });