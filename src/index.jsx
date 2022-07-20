import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { webfont } from "./include/webfont"
import "./sass/app.sass"

document.addEventListener("DOMContentLoaded", () => {
	webfont()
	ReactDOM.createRoot(document.getElementById("root")).render(
		<React.StrictMode>
			<App/>
		</React.StrictMode>,
	)
})

