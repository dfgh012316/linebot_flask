jQuery(document).ready(function($) {

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
    initializeLiff('1654894146-n7V7wZxv');

	var build = {'a':3,'b':6,'c':1,};
	var store = {'a1':
					['s1','s2'],
				 'a2':
				 	['s3'],
				 'a3':
				 	['s4'],
				 'b1':
				 	['s5'],
				 'b2':
				 	['s6','s7'],
				 'b3':
				 	['s8','s9'],
				 'b4':
				 	['s10','s11'],
				 'b5':
				 	['s12','s13'],
				 'b6':
				 	['s14','s15'],
				 'c1':
				 	['s16','s17'],
				 'c2':
				 	['s18','s19'],
				 'c3':
				 	['s20']
				}
	function build_build(build){
		for (var key in build) {
			$("#build_choose").append('<option value="'+key+'">'+key+'樓</option>')
		}	
	}
	build_build(build);
	var level = "";
	$("#build_choose").change(function(event) {
		level = "<option value=''>please choose</option>";
		if($('#build_choose').val()!=""){
			for (var i = 1; i <= build[$(this).val()]; i++) {
				level += '<option value='+i+'>'+i+'樓</option>'
			}
		}
		$("#level_choose").html(level);
	});
	$("#level_choose").change(function(event) {
		if($(this).val()!=0){
			$("#sl").html("");
			var loca = store[ $("#build_choose").val() + $(this).val() ];
			var sec = "";
			for (var loc in loca) {
				sec = '<table id ='+loca[loc]+' '+'class="tt" border="3" style="height: 155px; width: 540px;"> <tbody> <tr style="height: 25px;"><td style="width: 29px; height: 95px;" background="/static/img/cloud.png" rowspan="2"></td><th style="width: 93px; height: 25px; text-align: center;" class="name">'+loca[loc]+'</th></tr><tr style="height: 70px;"><td style="width: 93px; height: 70px; text-align: center; vertical-align: top;">info</td></tr></tbody></table>';
				$("#sl").append(sec);			
			}
			
		$(".tt").click(function(){
		var  message = $(this).attr("id")
    	liff.sendMessages([
    		{
    		type: 'text',
    		text: "我想要查看"+message,
    		},
							]);
		liff.closeWindow();
	   });
		}


	});

	
});