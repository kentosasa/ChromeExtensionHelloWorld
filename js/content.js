// content.jsが読み込まれた時にタイトルとurlを取得

// 現在のpage取得
var page = {
  "title": document.title,
  "url": document.location.href,
  "date": new Date().getTime()
};

//空のデータを用意する
var data = [];
//var raw = [];

//値の呼び出し
chrome.storage.local.get('histories', function(items){
  console.log("get data is => ");
  data = data.concat(items.histories);
  console.log(data);
});

// 有効な履歴の場合のみ保存する
setTimeout("dataSet();", 10000);

//
//メソッド群
//

//値の保存
function dataSet(){ 
  //urlの重複があれば削除して更新
  for (var i = 0; i < data.length; i++ ){
    if(data[i].url == page.url) data.splice(i,1);
  }
  data.unshift(page);

  //値の保存
  chrome.storage.local.set({'histories': data}, function(){
    if(chrome.runtime.error){
      console.log("runtime error");
    }
  });
};

