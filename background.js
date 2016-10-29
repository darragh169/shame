// background.js
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(
	function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  }
);

chrome.tabs.onUpdated.addListener(
	function(tabId, changeInfo, tab){
	  // Send a message to the active tab

	  var currentWebsiteToShame = 'github'

	  console.log('bg.js....');
	  console.log(arguments);
	  if(changeInfo.url && changeInfo.url.indexOf(currentWebsiteToShame) > -1){
	  	updateStorageObject(currentWebsiteToShame);
	  	commitToLocalStorage();

	    
	   	chrome.tabs.insertCSS(tabId, { file: 'shame_toast.css'});
	   	chrome.tabs.executeScript(tabId, { file: 'jquery-3.0.0.min.js' });
	  	chrome.tabs.executeScript(tabId, { file: 'shame_toast.js' }); 

	  	if(_shameTab){
	  		chrome.tabs.reload(_shameTab.id); 
	  	}
	  	else{
	  		chrome.tabs.create({index: 0,url: chrome.extension.getURL('shame.html'),active: true}, function(tab){
	  			_shameTab = tab;
	  		});  
	  	}	
	  }
	}
);

var _storageObj = {};
var _shameTab = null;

var createJsonStorageObject = function(){
	//_storageObj
};

var getJsonStorageObject = function(){
	_storageObj = JSON.parse(localStorage.getItem('shame_shame'));
};

var updateStorageObject = function(item){
	if(_storageObj[item]){
		var val = parseInt(_storageObj[item]);
		_storageObj[item] = val+=1;
	}
	else{
		_storageObj[item] = 1;
	}
};

var commitToLocalStorage = function(){
	localStorage.setItem('shame_shame', JSON.stringify(_storageObj));
}

getJsonStorageObject();