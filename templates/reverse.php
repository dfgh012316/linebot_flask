<!DOCTYPE html>
<html lang="zh-TW">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
	<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
	<script src="static/js/reverse.js"></script>
	<script src="https://static.line-scdn.net/liff/edge/2.1/sdk.js"></script>
	<title>Reverse</title>
</head>
<body>
	<div id="Reverse">
		<form id="ReverseForm">
			<label id="UserNameLabel">
				名稱：
				<input type="text" name="UserName" id="UserName" placeholder="請輸入兩個字以上" required="required">
			</label>
			<div id="UserNameMessage" class="Message"></div>
			<label id="PhoneLabel">
				手機：
				<input type="text" name="Phone" id="Phone" placeholder="09xxxxxxxx" required="required">
			</label>
			<div id="PhoneMessage" class="Message"></div>
			日期：
			<input type="text" name="Date" id="Date" placeholder="yyyy-mm-dd" required="required">
			<div id="DateMessage" class="Message"></div>
			時間：
			<label id="TimeLabel">
				<select id="Time" name="Time">
					<option value="">請選擇</option>
					<?php
						$Time = array('time1' => 'range1', 'time2' => 'range2');
						foreach ($Time as $key => $value) {
							echo "<option value='" . $key . "'>" . $value . "</option>";
						}
					?>
				</select>
			</label>
			<div id="TimeMessage" class="Message"></div>
			<label id="FieldLabel">
				場域：
				<input type="text" name="Field" id="Field" disabled="disabled" value="getStoreName()">
			</label>
			<div id="FieldMessage" class="message"></div>
			<label id="ServeLabel">
				服務：
				<select id="Serve" name="Serve">
					<option value="">請選擇</option>
					<?php
						$serve = array('serve1' => 's', 'server2' => 'v');
						foreach ($serve as $key => $value) {
							echo "<option value='" . $key . "'>" . $value . "</option>";
						}
					?>
				</select>
			</label>
			<div id="ServeMessage" class="Message"></div>
			<label id="PeopleNumberLabel">
				人數：
				<input type="text" name="PeopleNumber" id="PeopleNumber" required="required">
			</label>
			<div id="PeopleNumberMessage" class="Message"></div>
			<label id="RemarkLabel">
				備註：
				<br>
				<textarea name="Remark" id="Remark" cols="30" rows="10"></textarea>
			</label>
			<br>
			<button  type="button" name="SubmitButton" id="SubmitButton" value="Submit">提交</button>
		</form>
	</div>
</body>
</html>