var bkPage = chrome.extension.getBackgroundPage(); 
$ = jQuery;
var send = $('#formulario');
send.submit(function(){
	var filtro = $('#filtro').val();
	chrome.tabs.getSelected(null, function(tab) {
		var params = {method: "filter", tabid: tab.id, filtro: filtro};
		chrome.tabs.sendMessage(tab.id, params,
			function(response){
			 console.log(filtro);
			});
	});
	return false;
});
$('#filtro').keypress(function (e) {
  if (e.which == 13) {
    jQuery(this).blur();
    jQuery('#send').focus().click();
  }
});
