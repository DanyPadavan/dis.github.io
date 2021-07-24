const titlePage = "Star Wars: Space Warrior"

function update() {
	setTitle(titlePage)
}

function setTitle(title) {
	const tagName = 'title'

	let createTitleNode = () => document.createElement(tagName)
	let setText = (node, text) => { node.text = text; return node; }
	let appendTitleNode = (forParent, node) => { forParent.append(node); return node; }
	let withTag = (tagName) => document.getElementsByTagName(tagName)
	let asArray = (enumerable) => Array.from(enumerable, item => item)
	let first = (array, byDefault) => array.length > 0 ? array[0] : byDefault
	let getNode = () => first ( asArray ( withTag ( tagName ) ), appendTitleNode ( document.head, setText ( createTitleNode (), title ) ) )
	getNode().text = title
}

update()