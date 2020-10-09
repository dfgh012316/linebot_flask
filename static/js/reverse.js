$(document).ready(function() {
	var initializeLiff = function initializeLiff(myLiffId) {
        liff
            .init({
                liffId: myLiffId
            })
            .then(() => {
                // start to use LIFF's api
                getUserProfile();

            })
            .catch((err) => {
            });
    }
    //填入LIFF的ID
    initializeLiff('1654894146-oa29W7aL'); 



	$("#Date").flatpickr({
		minDate: "today",
		dateForm: "Y-n-j",
	});
	$('.Message').css({
		color: 'red',
	});

	function checkUserName() {
		var UserName = $("#UserName").val();
		if (UserName.length > 2) {
			return true;
		} else {
			return false;
		}
	}

	function checkPhone() {
		var Phonecheck = /^09\d{8}$/;
		var Phone = $("#Phone").val();
		if (Phonecheck.test(Phone)) {
			return true
		} else {
			return false;
		}
	}

	function checkDate() {
		var D = $("#Date").val;
		if (D != "") {
			return true;
		} else {
			return false;
		}
	}

	function checkTime() {
		var Time = $("#Time").val();
		if (Time != "") {
			return true;
		} else {
			return false;
		}
	}

	function checkServe() {
		var Serve = $("#Serve").val();
		if (Serve != "") {
			return true;
		} else {
			return false;
		}
	}

	function checkPeopleNumber() {
		var PeopleNumber = $("#PeopleNumber").val();
		PeopleNumber = parseInt(PeopleNumber, 10);
		if ($.isNumeric(PeopleNumber)) {
			return true;
		} else {
			return false;
		}
	}

	function submitButton() {
		if (checkUserName() && checkPhone() && checkDate() && checkTime() && checkServe() && checkPeopleNumber()) {
			$("#SubmitButton").attr('disabled', false).click(function(event) {
				$.ajax({
					type: "POST",
					url: "test2.php",
					data: $('#ReverseForm').serialize(),
					success: function() {
						alert("success");
					},
					error: function() {
						alert("fail");
					}
				});
			});
		} else {
			$("#SubmitButton").attr('disabled', "");
		}
	}
	submitButton();

	function changeWeb($url) {
		$(window).attr('location', $url);
	}

	$("#UserName").blur(function(event) {
		if (checkUserName()) {
			$("#UserNameMessage").html("");
			submitButton();
		} else {
			$("#UserNameMessage").html("請修正名稱");
			$("#SubmitButton").attr('disabled', "");
		}
	});
	$("#Phone").blur(function(event) {
		if (checkPhone()) {
			$("#PhoneMessage").html("");
			submitButton();
		} else {
			$("#PhoneMessage").html("請修正號碼");
			$("#SubmitButton").attr('disabled', "");
		}
	});
	$("#Date").blur(function(event) {
		if (checkDate()) {
			$("#DateMessage").html("");
			submitButton();
		} else {
			$("#DateMessage").html("請選擇日期");
			$("#SubmitButton").attr('disabled', "");
		}
	});
	$("#Time").change(function(event) {
		if (checkTime()) {
			$("#TimeMessage").html("");
			submitButton();
		} else {
			$("#TimeMessage").html("請選擇時間");
			$("#SubmitButton").attr('disabled', "");
		}
	});
	$("#Serve").change(function(event) {
		if (checkServe()) {
			$("#ServeMessage").html("");
			submitButton();
		} else {
			$("#ServeMessage").html("請選擇服務");
			$("#SubmitButton").attr('disabled', "");
		}
	});
	$("#PeopleNumber").blur(function(event) {
		if (checkPeopleNumber()) {
			$("#PeopleNumberMessage").html("");
			submitButton();
		} else {
			$("#PeopleNumberMessage").html("請選擇人數");
			$("#SubmitButton").attr('disabled', "");
		}
	});
});