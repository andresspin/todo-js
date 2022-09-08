import './styles.css';
/* 
En la siguiente linea vemos como se exporta a traves de un index de clases
*/
import {Todo,TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';




export const todoList = new TodoList

todoList.todos.forEach(crearTodoHtml);
//todoList.todos.forEach(todo => crearTodoHtml(todo) );



 /*const tarea = new Todo('Aprender Javascript y Node y React y HTML');
todoList.nuevoTodo(tarea);*/

//tarea.completado = true;

/* console.log(todoList);

crearTodoHtml(tarea);


localStorage.setItem('mi-key','Andrespi');
sessionStorage.setItem('mi-key','Andrespi');
 */
/* setTimeout(()=>{
    localStorage.removeItem('mi-key');
},1500)
 */
//todoList.todos[0].imprimirClase();

//console.log(todoList.todos)
