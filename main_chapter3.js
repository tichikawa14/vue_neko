new Vue({
  el: "#app",
  data: {
    message: 'Hello'
  },
  methods: {
    handleClick: function() {
      alert("クリックしたよ");
    },
    handler: function (comment) {
      console.log(comment)
    }
  }
});
