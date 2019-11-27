// 1章

// var app = new Vue({
//   el: "#app",
//   data: {
//     message: "Hello Vue.js!",
//     list: ["りんご", "ばなな", "いちご"],
//     handleClick: function(event) {
//       alert(event.target);
//     },
//     show: true
//   }
// });

// 2章

var app = new Vue({
  el: "#app",
  data: {
    // オブジェクトデータ
    message:  {
        value: "Hello Vue.js!",
        
    },
    scroll: 0,
    count: 0,
    // 配列データ
    // list: ["りんご", "ばなな", "いちご"],
    // 別のデータを使用してlistから取り出す要素を動的に
    handleClick: function(event) {
      alert(event.target);
    },
    classObject: {
      child: true,
      'is-active': true
    },
    styleObject: {
      color: 'red',
      backgroundColor: 'lightgray'
    },
    num: 1,
    ok: true,
    list: []
      // { id: 1, name: 'スライム', hp: 100 },
      // { id: 2, name: 'ゴブリン', hp: 200 },
      // { id: 3, name: 'ドラゴン', hp: 500 },
  },
  mounted: function() {
      // this.scroll = 100
      console.log(this.$el)
  },
  methods: {
    // ボタンをクリックしたときのハンドラ
    increment: function() {
        this.count += 1
    },
    doAdd: function() {
      // リスト内で1番大きいIDを取得
      var max = this.list.reduce(function(a, b) {
        return a > b.id ? a : b.id
      }, 0)
      this.list.push({
        id: max + 1, // 現在の最大のIDに+1してユニークなIDを作成
        name: this.name, // 現在のフォームの入力値
        hp: 500
      })
    },
    doRemove: function(index) {
      this.list.splice(index, 1)
    },
    doAttack: function(index) {
      // ボタンのクリックイベントハンドラ
      this.list = this.list.filter(function(el) {
        return el.hp = 100
      })
    }
  },
  created: function() {
    // // 全ての要素にactiveプロパティを追加したい
    // this.list.forEach(function(item) {
    //   this.$set(item, 'active', false)
    //   // item.active = falseではリアクティブにならない
    // }, this)
    axios.get('https://api.myjson.com/bins/il65e').then(function(response) {
      // 取得完了したらlistリストに代入
      this.list = response.data
    }.bind(this)).catch(function(e) {
      console.error(e)
    })
  }
});