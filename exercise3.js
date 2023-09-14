fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    //    const todoTitles = json.map(todo => todo.title)
    const uncompleted = json.filter(todo => !todo.completed).map(todo => todo.title)
       console.log(uncompleted);
    })
  .catch(function(err) { 
    console.log(err);
  });