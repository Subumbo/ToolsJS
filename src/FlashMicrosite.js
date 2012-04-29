/**
 * @author Hello World
 */
 
 /* Author:
	Patrick Wolleb
*/

var FlashMicrosite = function() {
	
	
		if( navigator.userAgent.match(/Android/i)
 			|| navigator.userAgent.match(/webOS/i)
	 		|| navigator.userAgent.match(/iPhone/i)
 			|| navigator.userAgent.match(/iPad/i)
 			|| navigator.userAgent.match(/iPod/i)
 			|| navigator.userAgent.match(/BlackBerry/i)
 		){
			fallback();
		} else {
			var _flash_installed = ((typeof navigator.plugins != "undefined" && typeof navigator.plugins["Shockwave Flash"] == "object") || (window.ActiveXObject && (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) != false));
			if(_flash_installed) {
				
				// load swf object and swf address
				Modernizr.load([{
					load: 'https://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js',
				  	complete : function() {
				  		console.log('swf object loaded cdn');
				  		if(!window.swfobject) {
				  			Modernizr.load([{load:'js/libs/swobject.js', complete:function() {
				  				console.log('swf object loaded local');
				  			}}]);
				  		}
				  	}
				},{ 
					load: 'js/libs/swfaddress.js', complete:function() {
						embedSWF();
					}}]);
				
			}else {
				alert('DESKTOP no Flash');
			}
			
		}
		
		function embedSWF() {
			Modernizr.load([{load: 'css/flash.css', complete:function() {
				var vars = {locale:'en'};
				var params = {};
				var attributes = {}
				swfobject.embedSWF("flash/Main.swf", 'main', '100%', '100%', '10.0.0', null, vars, params, attributes);
			}}]);
		}
		
		function fallback() {
			alert('running fallback')
		}
	

};