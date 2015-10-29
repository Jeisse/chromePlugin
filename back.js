function check(tab_id,data,tab) {
	if(tab.url.indexOf('vgn-cms-mia.terra.com/vgn-ext-templating/sites/terra/atomo/util/') > -1) {
		chrome.pageAction.show(tab_id);
	}
}
chrome.tabs.onUpdated.addListener(check);