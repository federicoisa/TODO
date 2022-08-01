import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo )); // cuando tengo un solo argumento para enviar y es el unico argumento que recibo.. no hace falta la funcion de flecha
// cuando vea una sintaxis asi: forEach(crearTodoHtml); quiere decir que el primer argumento que tengo en el foreach esta llamando la funcion especificada entre sus parentesis y los parentesis junto al creartodohtml es el primer argumento que regresa el foreach

// const newTodo = new Todo('Aprender JavaScript');
// todoList.nuevoTodo( newTodo );

// console.log( 'todos', todoList.todos );







// const tarea = new Todo('Aprender javascript');

// todoList.nuevoTodo( tarea );


// console.log( todoList );
// crearTodoHtml( tarea );

// localStorage.setItem('mi-key', 'ABC1234');
// sessionStorage.setItem('mi-key', 'ABC1234');

// setTimeout( ()=> {

//     localStorage.removeItem('mi-key');

// }, 1500 );

