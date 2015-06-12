//空のデータを用意する
var items = [];
var hoge;
//値の呼び出し
chrome.storage.local.get('histories', function(data){ 
  items = items.concat(data.histories);
  for(var i = 0; i < items.length; i++){
    try{
      var item = items[i];
      var date = new Date(item.date);
      hoge = date;
      var history = "<p><a href=\"" + item.url +"\" target=\"_blank\">" +(date.getMonth()+1) + "月" + (date.getDay()+1) +"日 " + item.title + "</a></p>";

      $("body").append(history);
     }catch(e){
      console.log(e);
     }
  }
});

//.getMonth()+1 + "月" + data[i].date.getDay() + "日"
