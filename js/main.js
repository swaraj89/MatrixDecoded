var _UIELEM = {
	input : "<input type='text' class='number-field'>",
	inputContainer : "",
	cell : "<td></td>",
	row : "<tr></tr>",
	table : "<table class='table table-bordered'></table>"
};
$(window).load(function() {

	var reqFields = $(".req");

	$("#createMatrix").on("click", function(event) {
		event.preventDefault();
		var isValidData = validaeData();
		
		var rowCount = parseInt($('#rows').val());
		var colCount = parseInt($('#columns').val());

		if (isValidData) {
			// Initialize UI Builder Instance
			var matrixInstance = matrix.getInstance({
				container : $('.matrix-container'),
				rowCount : rowCount,
				colCount : colCount,
				uiElem : _UIELEM,
				event : event
			});
			matrixInstance.init();

		}

	});
});

var validaeData = function(reqFields) {
	var isValid = true;

	// $.each(reqFields,function(){
	// var currentField = $(this);
	//
	// if(currentField.val() != NaN){
	// isValid = true;
	// }else{
	//
	// }
	// });
	//
	return isValid;
};
