import React from "react"

export const Completed = (props) => {
	const { completedTodo, removeCompletedTodo, restoreTodo } = props
	return (
		<section className="section--completed">
			<h2 className="heading">Completed</h2>
			<ul className="list">
				{completedTodo.map((todo, index) => {
					return (
						<li className="list__item" key={todo}>
							<span className="material-symbols-outlined btn--completed">done</span>
							<p className="list__body">{todo}</p>
							<button className="material-symbols-outlined" type="button" title="restore to incomplete" onClick={() => restoreTodo(index)}>arrow_upward</button>
							<button className="btn--delete material-symbols-outlined" type="button" title="delete tasks" onClick={() => removeCompletedTodo(index)}>delete</button>
						</li>
					)
				})}
			</ul>
		</section>
	)
}