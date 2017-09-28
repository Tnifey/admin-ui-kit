(function () {
	var radios = document.querySelectorAll('.radio, .checkbox, .switch');
	radios.forEach(function (a) {
		var input = a.querySelector('input');
		if(input.checked)
			a.classList.add('checked');
		if(input.disabled)
			a.classList.add('disabled');

		input.addEventListener('change', function (e) {

			if(this.type === "radio") {
				var name = this.getAttribute('name');
				var radiosWithTheSameName = document.querySelectorAll('input[type="radio"][name="'+ name +'"]');
				radiosWithTheSameName.forEach(function (x) {
					if(a !== x)
						x.parentElement.classList.remove('checked');
				});
			}
			this.parentElement.classList.toggle('checked');
		});
	});
})();