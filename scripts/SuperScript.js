var main = new Vue({
	el: '#main',
	data: {
		message: 'Hi'
	},
	methods: {
		resultText: function(){
			return document.querySelector('#text')
		},
		numClickButton: function() {
			var elem = event.target.innerHTML
			var char = this.resultText()
			char.value += elem
		}
	}
})