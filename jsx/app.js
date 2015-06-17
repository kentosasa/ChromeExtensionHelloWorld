//空データ
var items = [];


//ReactでViewの元となるHistoryListClassを作成する
var HistoryList = React.createClass({
  render: function(){
    var historyItems = this.props.items.map(function(item){
      var date = new Date(item.date);
      console.log(date.getDay()+1);
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

//Search Classの作成
var Search = React.createClass({
    /*
  getInitialState() {
    return {
      textValue: "検索BOX"
    };
  },*/
  //変更されたら呼ぶ関数
  changeText(e) {
    //検索結果
    var result = [];
    for( var i = 0; i < items.length; i++){
      if(items[i].title.toLowerCase().includes(e.target.value.toLowerCase())) result.push(items[i]);
    }
    //結果の反映
    React.render(
        <HistoryList items={result}/>,
        document.getElementById('content')
        );
  },
  render(){
    return(
        <div>
          <span><b>検索  </b></span>
          <input type="text" onChange={this.changeText} />
        </div>
        );
  }
});

React.render(
    <Search items={items}/>,
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
    <HistoryList items={items}/>,
    document.getElementById('content')
    );
});     


