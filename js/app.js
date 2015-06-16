//空データ
var items = [];


//ReactでViewの元となるHistoryListClassを作成する
var HistoryList = React.createClass({displayName: "HistoryList",
  render: function(){
    var historyItems = this.props.items.map(function(item){
      var date = new Date(item.date);
      console.log(date.getDay()+1);
      return(
          React.createElement("div", {className: "history"}, 
            React.createElement("p", null, date.getMonth()+1, "月", date.getDay()+1, "日 ", React.createElement("a", {target: "_blank", href: item.url}, item.title))
          )
          );
    });
    return (
        React.createElement("div", {className: "historyList"}, 
           historyItems 
        )
        );
  }
});

/* HistoryListにitemを渡して、contentの位置に追加する
React.render(
    <HistoryList items={items}/>,
    document.getElementById('content')
    );
*/

//値の呼び出し
chrome.storage.local.get('histories', function(data){
  items = items.concat(data.histories);
  //データが変わったので更新を行う
  React.render(
    React.createElement(HistoryList, {items: items}),
    document.getElementById('content')
    );
});     


