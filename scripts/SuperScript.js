var main = new Vue({
	el: '#main',
	data: {
		textArea: '',
		resultData: [
			{
				num: 44,
				do: '+'
			}
		]
	},
	methods: {
		numClickButton: function() {		
			//this.resultData.push(parseFloat(this.resultText().value))
			
			this.textArea += event.target.innerHTML
		},
		charClickButton: function(){
			
			this.resultData.push({num: this.textArea, do: event.target.innerHTML})
			this.textArea += event.target.innerHTML
		},

		resetText: function(){
			this.textArea = ''
			this.resultData = []
		},
		point: function(){
			
			if (this.textArea.split('.').length == 1) {
				this.textArea += '.'
			} 
		},
		endResult: function(){
			
			console.log(this.textArea)
		}
	}
})

