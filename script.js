<!-- Time Tracker Code start -->
	time = new Date();
	var month = new Array();
	months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
	var month = months[time.getMonth()];
	var day = time.getDate();
	var year = time.getFullYear();
	var date = month + "/" + day + "/" + year;
	document.write("<h4>Today's Date: " + date + ".</h4>");
<!-- Time Tracker Code end -->
