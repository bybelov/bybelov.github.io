import React from "react";
import ReactDOM from 'react-dom';
import TodoItem from './todo-item';

// // Функциональный react компонент
// const HelloWorld = () => {
//   return <h1>Hello React</h1>;
// }

// React-компонент основанный на классах
class TodoApp extends React.Component{
  constructor(){
    super(); // Конструктор из react-компонент
    // Исходное состояние приложение
    this.state = {
      todos: [
        {name: 'Настроить webpack', checked: true},
        {name: 'Запустить webpack-dev-server', checked: true},
        {name: 'Написать TodoApp', checked: false}
      ],
      newTodoText: ''
    };
  }

  toggleTodo(key){
    const todo = this.state.todos.map((todo, i) => {
      if (key === i){
        return {
          name: todo.name,
          checked: !todo.checked
        }
      }
      else{
        return todo;
      }
    });
    // Обновляем состояние приложения
    this.setState({todos: todo});
  }

  addTodo(){
    const todo = this.state.todos;
    todo.push({
      name: this.state.newTodoText,
      checked: false
    })
    // Обновляем состояние приложения
    this.setState({
      todos: todo,
      newTodoText: ''
    });
  }

  render(){
    // JSX-синтаксис
    return (
      <div>
      <h2>{this.state.newTodoText}</h2>
        <ol>
          {
            this.state.todos.map((todo, i) => {

              return (
                <TodoItem
                  key={i}
                  name={todo.name}
                  checked={todo.checked}
                  toggleTodo={this.toggleTodo.bind(this, i)} />
              )
            })
          }
        </ol>

        <input
          type="text"
          placeholder="Новая задача"
          value={this.state.newTodoText}
          onChange={ev => {
            this.setState({newTodoText: ev.target.value });
          }}
          onKeyUp={ev => {
            if(ev.keyCode === 13){
              this.addTodo();
            }
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.querySelector('#app')
);
