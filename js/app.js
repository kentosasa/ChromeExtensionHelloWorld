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
            React.createElement("p", null, date.getMonth()+1, "月", date.getDate(), "日 ", React.createElement("a", {target: "_blank", href: item.url}, item.title))
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

//Search Classの作成
var Search = React.createClass({displayName: "Search",
    /*
  getInitialState() {
    return {
      textValue: "検索BOX"
    };
  },*/
  //変更されたら呼ぶ関数
  changeText:function(e) {
    //検索結果
    var result = [];
    for( var i = 0; i < items.length; i++){
      if(items[i].title.toLowerCase().includes(e.target.value.toLowerCase())) result.push(items[i]);
    }
    //結果の反映
    React.render(
        React.createElement(HistoryList, {items: result}),
        document.getElementById('content')
        );
  },
  render:function(){
    return(
        React.createElement("div", null, 
          React.createElement("span", null, React.createElement("b", null, "検索  ")), 
          React.createElement("input", {type: "text", onChange: this.changeText})
        )
        );
  }
});

React.render(
    React.createElement(Search, {items: items}),
    document.getElementById('search')
    );

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


