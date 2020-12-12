import React from 'react'

const Todos = ({todos}) => {
  return (
    <div className="todos collection">
      {todos.length ? (todos.map(todo => (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
        </div>
      ))) : <p className="center">恭喜你完成了所有待办事项！</p>}
    </div>
  )
}

export default Todos
