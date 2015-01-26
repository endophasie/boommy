
var validateForm = {

	bindEvent: function() {
		var _this = this;

		$('.form__field').on('blur', _this.validation)
	},

	validation: function() {
		var $this = $(this),
			fieldName = $this.attr('name'),
			fieldVal = $this.val(),
			result = false,

			emailRegexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			phoneRegexp = /[0-9]/,
			nameRegexp = /[A-Za-zА-Яа-яЁё]/;

		if(fieldName == 'email') {
			var result = emailRegexp.test(fieldVal)
		} else if(fieldName == 'name' || 'surname') {
			var result = nameRegexp.test(fieldVal)
		} else {
			var result = phoneRegexp.test(fieldVal)
			
		}

		if(result) {
			validateForm.success($this)
		} else {
			validateForm.error($this)
		}
	
	
	},

	error: function($this) {
		$this.removeClass('form__field_correct')
			 .addClass('form__field_error')
			  .parent().addClass('form__field__container form__field_error__container');
	},

	success: function($this) {
		$this.removeClass('form__field_error')
			 .addClass('form__field_correct')
			  .parent().addClass('form__field__container form__field_correct__container');
	}
}

$(document).ready(function () {
	$(".chosen-select").chosen();

	validateForm.bindEvent();
	
});