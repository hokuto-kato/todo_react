import React, { useState } from "react"
import { Header } from "./components/Header"
import { Incomplete } from "./components/Incomplete"
import { Completed } from "./components/Completed"

export const App = () => {
	const [todoText, setTodoText] = useState("")
	const [inCompleteTodo, setIncompleteTodo] = useState([])
	const [completedTodo, setCompletedTodo] = useState([])
	const onChangeText = (e) => {
		return setTodoText(e.target.value)
	}
	const addTodo = () => {
		if (!todoText.match(/\S/g)) return
		const newIncompleteTodo = [...inCompleteTodo, todoText]
		setIncompleteTodo(newIncompleteTodo)
		setTodoText("")
	}
	const addTodoEnter = (e) => {
		if (!todoText.match(/\S/g)) return
		if(!e.nativeEvent.isComposing && e.key === "Enter") {
			const newIncompleteTodo = [...inCompleteTodo, todoText]
			setIncompleteTodo(newIncompleteTodo)
			setTodoText("")
		}
	}
	const removeIncompleteTodo = (index) => {
		const newIncompleteTodo = [...inCompleteTodo]
		newIncompleteTodo.splice(index, 1)
		setIncompleteTodo(newIncompleteTodo)
	}
	const removeCompletedTodo = (index) => {
		const newTodo = [...completedTodo]
		newTodo.splice(index, 1)
		setCompletedTodo(newTodo)
	}
	const completeTodo = (index) => {
		const newIncompleteTodo = [...inCompleteTodo]
		newIncompleteTodo.splice(index, 1)
		const newCompleteTodo = [...completedTodo, inCompleteTodo[index]]
		setCompletedTodo(newCompleteTodo)
		setIncompleteTodo(newIncompleteTodo)
	}
	const restoreTodo = (index) => {
		const newCompleteTodo = [...completedTodo]
		newCompleteTodo.splice(index, 1)
		const newIncompleteTodo = [...inCompleteTodo, completedTodo[index]]
		setCompletedTodo(newCompleteTodo)
		setIncompleteTodo(newIncompleteTodo)
	}
	return (
		<>
			<Header todoText={todoText} onChangeText={onChangeText} addTodo={addTodo} addTodoEnter={addTodoEnter}/>
			<Incomplete inCompleteTodo={inCompleteTodo} completeTodo={completeTodo} removeIncompleteTodo={removeIncompleteTodo}/>
			<Completed completedTodo={completedTodo} restoreTodo={restoreTodo} removeCompletedTodo={removeCompletedTodo}/>
		</>
	)
}