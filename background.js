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
	  console.log('bg.js....');
	  console.log(arguments);
	  if(changeInfo.url && changeInfo.url.indexOf('facebook.com') > -1){
	  	chrome.tabs.update(tab.id, {url: chrome.extension.getURL('shame.html')});
	  	
	  }
	}
);