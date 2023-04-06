import React, { useState, useRef, useEffect } from 'react'

// tsc --noEmit --watch

type TodoType = {
	id: number
	name: string
	complete: boolean
}

function App() {
  const [todos, setTodos] = useState<TodoType[]>([])
  const todoNameRef = useRef<HTMLInputElement>(null)

  // o useEffect é chamado sempre que algo muda; esse algo é determinado no segundo parâmetro
  useEffect(() => {
	if (todos.length > 0) localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // uma vez que um array vazio nunca muda, esta função é chamada só uma vez
  useEffect(() => {
  	const result = localStorage.getItem('todos')
  	if (!result) return
	const storedTodos: any = JSON.parse(result)
	if (storedTodos) setTodos(storedTodos)
  }, [])

  const toggleTodo = (id: number) => {
	const newTodos = [... todos]
	const todo = newTodos.find(todo => todo.id === id)
	if (!todo) return
	todo.complete = !todo.complete
	setTodos(newTodos)
  }

  const handleAddTodo = () => {
	const date = new Date()
	const name = todoNameRef.current!.value
	const id = date.getTime()

	if (name === '') return
	setTodos(prevTodos => {
		return [... prevTodos, {id, name, complete: false}]
	})
	
	todoNameRef.current!.value = ''
  }

  const handleClearTodos = () => {
	const newTodos = todos.filter(todo => !todo.complete)
	localStorage.setItem('todos', '')
	setTodos(newTodos)
  }

  return (
	<div className="principal">
		<div>{todos.filter(todo => !todo.complete).length} remaining</div>
		<TodoList todos={todos} toggleTodo={toggleTodo}/>
		<input ref={todoNameRef} type="text" placeholder="Inform your todo" className="informingTodo"/>
		<button onClick={() => handleAddTodo()}>Add Todo</button>
		<button onClick={handleClearTodos}>Clear complete</button>
	</div>
  )
}

type TodoProps = {
	todo: TodoType
	toggleTodo: (id: number) => void
}
function Todo({ todo, toggleTodo }: TodoProps) {
  return (
	<div>
		<input type="checkbox" id={todo.id.toString()} checked={todo.complete} onChange={() => { toggleTodo(todo.id) }}/>
		<label htmlFor={todo.id.toString()}>{ todo.name }</label>
	</div>
  )
}

type TodoListProps = {
	todos: TodoType[]
	toggleTodo: (id: number) => void
}
function TodoList({ todos, toggleTodo }: TodoListProps) {
  return (
  	<>
		{todos.map(todo => {
			return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
		})}
  	</>
  )
}

export default App