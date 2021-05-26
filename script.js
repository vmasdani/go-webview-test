document.querySelector('#my-btn').addEventListener('click', e => {
	alert('This is a test alert. If you can see this, then JavaScript is running.')

	const textInput = prompt('Enter stuff in prompt:')

	if (textInput && textInput !== '') {
		alert(`You entered ${textInput}`)
	} else {
		alert('Prompt failed.')
	}
})
