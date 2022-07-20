import WebFont from "webfontloader"

export const webfont = () => {
	const html = document.querySelector("html")
	WebFont.load({
		google: {
			families: ["Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"],
		},
	})
	setTimeout(() => {
		html.classList.add("wf-inactive")
	}, 3000)
}