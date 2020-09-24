import os, sys
from flask import Flask, request, abort, jsonify,render_template
import requests
from flask_cors import CORS
from linebot import (
    LineBotApi, WebhookHandler
)
from linebot.exceptions import (
    InvalidSignatureError
)
from linebot.models import (
    MessageEvent, TextMessage, TextSendMessage,PostbackEvent
)
from dotenv import load_dotenv   #userID richmenID
load_dotenv()

app = Flask(__name__)
CORS(app)

# get channel_secret and channel_access_token from your environment variable
channel_secret=os.getenv('LINE_CHANNEL_SECRET',None)
channel_access_token=os.getenv('LINE_CHANNEL_ACCESS_TOKEN',None)
if channel_secret is None or channel_access_token is None:
    print('Specify LINE_CHANNEL_SECRET and LINE_CHANNEL_ACCESS_TOKEN as environment variables.')
    sys.exit(1)

line_bot_api = LineBotApi(channel_access_token)
handler = WebhookHandler(channel_secret)

@app.route('/')
def home():
    return "Hello man"

@app.route('/ActivityList')
def ActivityList():
    return render_template('ActivityList.php')


@app.route('/CouponList')
def CouponList():
    return render_template('CouponList.php')

@app.route('/NewsList')
def NewsList():
    return render_template('NewsList.php')

@app.route('/search')
def search():
    return render_template('search.php')

@app.route('/SendMessage')
def SendMessage():
    return render_template('SendMessage.php')

@app.route('/callback', methods=['POST'])
def callback():
    # get X-Line-Signature header value
    signature = request.headers['X-Line-Signature']

    # get request body as text
    body = request.get_data(as_text=True)

    # handle webhook body
    try:
        handler.handle(body, signature)
    except InvalidSignatureError:
        print('Invalid signature. Please check your channel access token/channel secret.')
        abort(400)

    return 'OK'


@app.route('/currency_exchange', methods=['POST'])
def handle_currency_exchange():
    data = request.get_json()
    twd_data = data.get('twd')
    resp = requests.get('https://tw.rter.info/capi.php')
    currency_data = resp.json()
    usd_to_twd = currency_data['USDTWD']['Exrate']
    result = twd_data / usd_to_twd

    return jsonify({'result': result})

@handler.add(PostbackEvent)
def handle_postback(event):
    if event.postback.data == 'richmenu2' :
        line_bot_api.link_rich_menu_to_user(os.getenv('USERID'),os.getenv('RICHMENU_2'))
    elif event.postback.data == 'richmenu1' :
        line_bot_api.link_rich_menu_to_user(os.getenv('USERID'),os.getenv('RICHMENU_1'))

@handler.add(MessageEvent, message=TextMessage)
def handle_message(event):
    input_text = event.message.text

    if input_text == '@查詢匯率' or input_text == '@匯率查詢':
        resp = requests.get('https://tw.rter.info/capi.php')
        currency_data = resp.json()
        usd_to_twd = currency_data['USDTWD']['Exrate']

        line_bot_api.reply_message(
            event.reply_token,
            TextSendMessage(text=f'美元 USD 對台幣 TWD：1:{usd_to_twd}'))

    elif input_text== '測試' :
        line_bot_api.reply_message(
            event.reply_token,
            TextSendMessage(text="https://liff.line.me/1654894146-KLOAN9VR"))

    elif input_text == '搜尋' :
        line_bot_api.reply_message(
            event.reply_token,
            TextSendMessage(text="https://liff.line.me/1654894146-n7V7wZxv"))

    elif input_text == '優惠券' :
        line_bot_api.reply_message(
            event.reply_token,
            TextSendMessage(text="https://liff.line.me/1654894146-BeXZxaP7"))

    elif input_text == '活動' :
         line_bot_api.reply_message(
            event.reply_token,
            TextSendMessage(text="https://liff.line.me/1654894146-YOXVKBZk"))

    elif input_text == '消息' :
         line_bot_api.reply_message(
            event.reply_token,
            TextSendMessage(text="https://liff.line.me/1654894146-Q2k7n1Gg"))


    else :
        line_bot_api.reply_message(
        event.reply_token,
        TextSendMessage(text=event.message.text))



if __name__ == '__main__':
    app.debug="True"
    app.run(port=1314)