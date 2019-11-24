var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js!",
    list: ["りんご", "ばなな", "いちご"],
    handleClick: function(event) {
      alert(event.target);
    },
    show: true
  }
});
