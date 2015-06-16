//空データ
var items = [];
items.push({name: "hoge", hoge: "hoge"});

var HistoryList = React.createClass({
  render: function(){
    var historyItems = this.props.items.map(function(item){
      return(
          <div className="history">
          {item.title}
          </div>
          );
    });
    return (
        <div className="historyList">
          { historyItems } 
        </div>
        );
  }
});


React.render(
    <HistoryList items={items}/>,
    document.getElementById('content')
    );


//値の呼び出し
chrome.storage.local.get('histories', function(data){
  items = items.concat(data.histories);
  React.render(
    <HistoryList items={items}/>,
    document.getElementById('content')
    );
});     


