var main = new Vue({
	el: '#main',
	data: {
		textArea: '',
		number: '',
		listWillDo: [],
		listNum: []
	},
	methods: {
		numClickButton: function() {		
			//this.resultData.push(parseFloat(this.resultText().value))
			var elem = 	event.target.innerHTML
			this.textArea += event.target.innerHTML
		},
		charClickButton: function(){
			var elem = 	event.target.innerHTML
			var a = this.listWillDo.length-1
			if (this.listWillDo[a] != elem) {
					
						this.listWillDo.push(elem)
						this.textArea += event.target.innerHTML
						
					

				}

		},

		resetText: function(){
			this.textArea = ''
			this.listWillDo = []
		},
		point: function(){
			
			if (this.textArea.split('.').length == 1) {
				this.textArea += '.'
			} 
		},
		endResult: function(){
			
			console.log(this.listWillDo)
		}
	}
})

