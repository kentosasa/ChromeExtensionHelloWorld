//空のデータを用意する
var data = [];

//値の呼び出し
chrome.storage.local.get('histories', function(items){
  data = data.concat(items.histories);
  console.log("popup");
  console.log(data);
  for(var i = 0; i < data.length; i++){
    var history = "<p><a href=\"" + data[i].url +"\" target=\"_blank\">" + data[i].title + "</a></p>";

    $("body").append(history);
  }
});


