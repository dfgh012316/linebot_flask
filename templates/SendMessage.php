<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>T.E.S.T</title>
    <script src="https://static.line-scdn.net/liff/edge/2.1/sdk.js"></script>
</head>
<body>

<script>
    var table;

    function initializeLiff(myLiffId) {
        liff
            .init({
                liffId: myLiffId
            })
            .then(() => {
                // start to use LIFF's api
                checkOS();

            })
            .catch((err) => {
            });
    }

    initializeLiff('1654894146-KLOAN9VR');

</script>

<script language="javascript">

function SendMessage() {
    var  message =prompt("請輸入妳要傳送的訊息");
    
    liff.sendMessages([
    {
    type: 'text',
    text: message,
    },
    ]);
    liff.closeWindow();
        }
</script>
<button onclick="SendMessage()">幫我傳送訊息</button>

</body>
</html>
