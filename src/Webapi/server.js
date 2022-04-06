
 async function server(){
    await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
  .then(response => response.json())
  .then(function(todos)
  {todos.map((todo)=>{
   return todo})})

}


export default server();
