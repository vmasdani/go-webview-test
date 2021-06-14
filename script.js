try {
	alert(JSON.stringify(navigator.geolocation))
} catch (e) {
	alert(e)
}
document.querySelector('#my-btn').addEventListener('click', e => {
	alert('This is a test alert. If you can see this, then JavaScript is running.')

	const textInput = prompt('Enter stuff in prompt:')

	if (textInput && textInput !== '') {
		alert(`You entered ${textInput}`)
	} else {
		alert('Prompt failed.')
	}
})

document.querySelector('#localstorage-add').addEventListener('click', e => {
	try {
		localStorage.setItem('apiKey', 'testapikey')
		alert('Set success')
	} catch (e) {
		alert(e)
	}
	
})

document.querySelector('#localstorage-clear').addEventListener('click', e => {
	try {
		localStorage.removeItem('apiKey')
		alert('Remove success')
	} catch (e) {
		alert(e)
	}
	
})

document.querySelector('#localstorage-get').addEventListener('click', e => {
	try {
		alert(localStorage.getItem('apiKey'))
	} catch (e) {
		alert(e)
	}
	
})

document.querySelector('#location-api').addEventListener('click', e => {
	try {
	 	alert('Trying geolocation')

		if (navigator.geolocation) {
			alert('Geolocation OK')

		    	navigator?.geolocation?.getCurrentPosition(position => {
				alert(`Position: ${JSON.stringify(position?.coords)} `)
		   	}, e => {
				alert(JSON.stringify([e.code, e.message]))
			})

		} else {
			alert('Geolocation not supported')
		}
	} catch (e) {
		alert(e)
	}
	
})

document.querySelector('#placeholder-get').addEventListener('click', async e => {
	 try {
		const resp = await fetch(`https://jsonplaceholder.typicode.com/todos`)

	 	if (resp.status !== 200) throw await resp.text()

		document.querySelector('#placeholder-view').innerHTML = `
			<pre>
				<small>
					${JSON.stringify(await resp.json(), null, 2)}
				</small>
			</pre>	
		`
	 } catch (e) {
		alert(e)
	 }
})

document.querySelector('#text-field').addEventListener('input', e => {
	document.querySelector('#text-field-view').innerHTML = e.target.value
})
