var el = $("table").find("tbody tr td a");
jQuery.fn.exists = function(){return this.length>0;}

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if(request.method != "filter")
		return;
	
	var reply = request.filtro;
	var properties_id = "";
	var properties_path = "http://cms.terra.com/terraatomocmaext/secure/checkCold.do?propertiesClose=true&spfMask=00000&spfAId=";
	
	console.log(request.filtro);
	
	el.each(
		function(index,element){
			var migo = $(element);
			text = migo.text();

			if(text.indexOf(reply)!=-1)
			{
				migo.parents("tr").show();
				properties_id = migo.attr("href").split("=")[1];

				if(!migo.parents("tr").find(".properties_button").exists()) {
					migo.parents("tr")
					.append($('<td>')
						.attr('class', 'properties_button')
						.attr('style', 'text-align: center;')
						.append('<input type="button" value="Propriedades" onclick="window.open(\''+properties_path+properties_id+'\', \'Terra Channels Filter\',\'scrollbars=1,width=700,height=500, status=yes,resizable=yes\');" >')
					);
				}
			}
			else
			{
				migo.parents("tr").hide();
			}
		}
	);
});