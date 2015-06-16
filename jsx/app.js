//空データ
var items = [];
items.push({name: "hoge", hoge: "hoge"});

var HistoryList = React.createClass({
  render: function(){
    var historyItems = this.props.items.map(function(item){
      var date = new Date(item.date);
      return(
          <div className="history">
            <p>{date.getMonth()+1}月{date.getDay()+1}日 <a target="_blank" href={item.url}>{item.title}</a></p>
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


