fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    let initialValue = 0;
    // const uncompleted = json.filter(todo => todo.completed).map(todo => todo.title).reduce(()=>count++);
    const completed_num = json.reduce((accumulator, currentTodo) => {
        if(currentTodo.completed) {
            accumulator++;
        }
        return accumulator;
    } ,initialValue);

       console.log(completed_num);
    })
  .catch(function(err) { 
    console.log(err);
  });