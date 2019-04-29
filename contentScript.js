function timedRefresh(timeoutPeriod) {
	return setTimeout("location.reload(true);",timeoutPeriod);
}

console.log('contentScript is running from extension');
chrome.storage.sync.get('websites', function(items) {
	console.log(items);
	var websiteMatches = items.websites.filter(item => window.location.href.indexOf(item) !== -1);
	if (websiteMatches.length > 0){
		console.log('timed refresh is active');
		chrome.storage.sync.get('minutes', function(items) {
			console.log('refresh every: ' + items.minutes.toString() + ' minutes');
			window.onload = timedRefresh(items.minutes*60*1000); // 10 minutes
		});
	}
});

