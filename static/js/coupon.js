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
    initializeLiff('1654894146-BeXZxaP7'); //not yet

    sec=" " ;
    for(var i=1;i<4;i++ )
    {
        sec = '<table id ='+i+' '+'class="tt" border="3" style="height: 155px; width: 540px;"> \
                <tbody> <tr style="height: 25px;"><td style="width: 29px; height: 95px;" background="/static/img/cloud.png" rowspan="2">\
                </td><th style="width: 93px; height: 25px; text-align: center;" class="name">'+'第'+i+'家'+'\
                300元優惠券\
                </th></tr><tr style="height: 70px;">\
                <td style="width: 93px; height: 70px; text-align: center; vertical-align: top;">\
                使用期限:\
                注意事項:\
                <button id="more" class="push"> 查看詳情</button>\
                </td></tr></tbody></table>';

        $("#sl").append(sec);
        
    }

    $(".push").click(function(){
        alert("騙你的根本沒有優惠券拉")
       });



});