$(document).ready(function() {
	$("#bt").click(function(){
		var a = $.ajax({
			type: 'get',
			url : 'test2.php',
			async: false,
			data : {td:'td'},
			success : function(msg){
				
			}
		}).responseText;
		alert(a);
	});
});