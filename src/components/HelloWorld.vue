<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <div class="wrap">
      <div id="container"></div>
      <div id="container2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    this.builmap();
  },
  methods: {
    builmap() {
      let map = new window.BMap.Map("container");
      let point = new window.BMap.Point(114.28398, 30.601327);
      map.centerAndZoom(point, 12);
      map.enableScrollWheelZoom(true);
      map.addEventListener("click", function(e) {
        console.log(e.point.lng + "," + e.point.lat);
      });

      let map2 = new window.BMap.Map("container2");
      let point2 = new window.BMap.Point(114.28398, 30.601327);
      map2.centerAndZoom(point2, 12);
      map2.enableScrollWheelZoom(true);
      map2.addEventListener("click", function(e) {
        console.log(e.point.lng + "," + e.point.lat);
      });
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.wrap {
  display: flex;
  justify-content: space-around;
}
#container {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
#container2 {
  width: 500px;
  height: 500px;
  border: 3px solid pink;
}
</style>
