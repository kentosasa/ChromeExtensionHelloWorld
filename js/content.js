// content.jsが読み込まれた時にタイトルとurlを取得

// 現在のpage取得
var page = {
  "title": document.title,
  "url": document.location.href
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
  data.unshift(page);
  console.log("this data is =>");
  console.log(data);

  chrome.storage.local.set({'histories': data}, function(){
    if(chrome.runtime.error){
      console.log("runtime error");
    }else{
      //Notify that we saved
    console.log("data saved => ");
    console.log(data);
    }
  });
};

