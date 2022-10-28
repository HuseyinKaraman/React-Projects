import React, { useEffect, useState } from "react";

import "./style.css";

const initialTodosValue = [
   {
      name: "vel pede morbi porttitor  ornare consequat",
      status: false,
   },
   {
      name: "eleifend pede libero quis orci nullam molestie nibh",
      status: false,
   },
   {
      name: "ipsum dolor sit amet consectetuer",
      status: false,
   },
   {
      name: "mauris enim leo rhoncus ",
      status: true,
   },
   {
      name: "rhoncus dui vel sem sedr",
      status: true,
   },
   {
      name: "libero rutrum ac at diam nam tristique",
      status: false,
   },
   {
      name: "in blandit ultrices enim lorem ipsum dolor sit amet",
      status: false,
   },
   {
      name: "interdum mauris",
      status: true,
   },
];

function Todos() {
   const [task, setTask] = useState({ name: "", status: false });
   const [todos, setTodos] = useState(initialTodosValue);
   const [selected, setSelected] = useState("All");
   const [filtered, setFiltered] = useState(todos);

   useEffect(() => {
      if (selected === "Active") {
         setFiltered(todos.filter((todo) => todo.status === false));
         return;
      } else if (selected === "Completed") {
         setFiltered(todos.filter((todo) => todo.status === true));
         return;
      }
      setFiltered(todos);
   }, [selected, todos]);

   const onSubmitHandler = (e) => {
      e.preventDefault();
      setTodos([...todos, task]);
      setTask({ name: "", status: false });
   };

   const onChangeInputHandler = (e) => {
      setTask({ ...task, name: e.target.value });
   };

   const changeStatus = (e) => {
      const uptadingTodos = [...todos];
      const todo = uptadingTodos.find((a) => a.name === e.target.name);
      todo.status = e.target.checked;
      setTodos(uptadingTodos);
   };

   const hrefHandler = (e) => {
      setSelected(e.target.innerText);
   };

   const clearHandler = () => {
      const newTodos = todos.filter((todo) => todo.status === false);
      setTodos(newTodos);
   };

   const destroyTodo = (todo) => {
      setTodos(todos.filter((item) => item.name !== todo.name));
   };
   const markAsComplete = () => {
      const newStatus = todos.map((item) => {
         item.status = true;
         return item;
      });
      setTodos(newStatus);
   };
   return (
      <section className="todoapp">
         <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmitHandler}>
               <input
                  className="new-todo"
                  placeholder="What needs to be done?"
                  onChange={onChangeInputHandler}
                  value={task.name}
               />
            </form>
         </header>

         <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all" onClick={markAsComplete}>
               Mark all as complete
            </label>

            <ul className="todo-list">
               {filtered.map((todo, index) => (
                  <li className={todo.status ? "completed" : ""} key={index}>
                     <div className="view">
                        <input
                           className="toggle"
                           type="checkbox"
                           name={todo.name}
                           onClick={changeStatus}
                           checked={todo.status}
                        />
                        <label>{todo.name}</label>
                        <button className="destroy" onClick={() => destroyTodo(todo)}></button>
                     </div>
                  </li>
               ))}
            </ul>
         </section>

         <footer className="footer">
            <span className="todo-count">
               <strong>{filtered.filter((todo) => todo.status === false).length} </strong>
               items left
            </span>

            <ul className="filters">
               <li>
                  <a href="#/" className={selected === "All" ? "selected" : ""} onClick={hrefHandler}>
                     All
                  </a>
               </li>
               <li>
                  <a href="#/" className={selected === "Active" ? "selected" : ""} onClick={hrefHandler}>
                     Active
                  </a>
               </li>
               <li>
                  <a
                     href="#/"
                     className={selected === "Completed" ? "selected" : ""}
                     onClick={hrefHandler}
                  >
                     Completed
                  </a>
               </li>
            </ul>

            <button className="clear-completed" onClick={clearHandler}>
               Clear completed
            </button>
         </footer>
      </section>
   );
}

export default Todos;
