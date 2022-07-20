import React from "react"

export const Header = (props) => {
	const { todoText, onChangeText, addTodo } = props
	return (
		<header className="header">
			<h1 className="header__heading">Todo</h1>
			<div className="header__input">
				<label htmlFor="input"></label>
				<input className="header__input-body" id="input" type="text" placeholder="enter your task" value={todoText} onChange={onChangeText}/>
				<button className="header__input-btn btn--primary" type="button" onClick={addTodo}>add</button>
			</div>
		</header>
	)
}