import React from "react"

export const Incomplete = (props) => {
	const { inCompleteTodo, completeTodo, removeIncompleteTodo } = props
	return (
		<section className="section">
			<h2 className="heading">Tasks</h2>
			<ul className="list">
				{inCompleteTodo.map((todo, index) => {
					return (
						<li className="list__item" key={index}>
							<button className="btn--complete material-symbols-outlined" type="button" title="complete tasks" onClick={() => completeTodo(index)}>radio_button_unchecked</button>
							<p className="list__body">{todo}</p>
							<button className="btn--delete material-symbols-outlined" type="button" title="delete tasks" onClick={() => removeIncompleteTodo(index)}>delete</button>
						</li>
					)
				})}

			</ul>
		</section>
	)
}