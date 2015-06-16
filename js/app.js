//空データ
var items = [];
items.push({name: "hoge", hoge: "hoge"});

var HistoryList = React.createClass({displayName: "HistoryList",
  render: function(){
    var historyItems = this.props.items.map(function(item){
      var date = new Date(item.date);
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


React.render(
    React.createElement(HistoryList, {items: items}),
    document.getElementById('content')
    );


//値の呼び出し
chrome.storage.local.get('histories', function(data){
  items = items.concat(data.histories);
  React.render(
    React.createElement(HistoryList, {items: items}),
    document.getElementById('content')
    );
});     


