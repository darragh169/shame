/*// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");
      console.log(firstHref);
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
    if(request.message === "show_shame_toast"){
      $('body').append('<div style="' + shame_css + '" class="shameToast">Shame!</div>');
      debugger;
      console.log('c.js....');
      console.log(arguments);
    }
  }
);

var shame_css = 'height: 200px; width: 200px; z-index: 999; background-color: black; border: solid 2px orange; position: absolute; top:0; left:0; text-align: center;';*/