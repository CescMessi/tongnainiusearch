function opentab() {
	chrome.tabs.create({
	  'url':'http://hometown.scau.edu.cn/course/index.php?s=/Search/search.html',
	  'selected':true
	});
}
function opentnn(){
	var url = "http://hometown.scau.edu.cn/course/index.php?s=/Search/search.html";
	window.open(url);
}
function tnn(info, tab){
	var text=encodeURIComponent(info.selectionText);
	var url = "http://hometown.scau.edu.cn/course/index.php?s=/Search/result/" + text + ".html";
	window.open(url);
}

chrome.browserAction.onClicked.addListener(opentab);
chrome.contextMenus.create({"title": "捅奶牛首页","contexts":["page"],"onclick":opentnn});
chrome.contextMenus.create({"title": "捅奶牛中搜索“%s”","contexts":["selection"],"onclick":tnn});

var id = chrome.extension.getURL('');
id = id.replace("chrome-extension://", "").replace("/", "");

chrome.management.launchApp(id, function(){
	var isInstalled = localStorage.getItem("installed");
	if(!isInstalled){
		localStorage.setItem("installed", "1");
		alert("本扩展专为华南农业大学使用")
	}
});