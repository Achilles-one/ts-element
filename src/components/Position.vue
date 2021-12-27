<template>
  <div class="position">
    <p>使用html自带的实现定位</p>
    <el-button @click="GetLocation()">点击获取当前位置</el-button>
    <div id="output"></div>

    <div class="baidu">
      <p>使用百度地图</p>
      <p>{{ this.locationMsg }}</p>
    </div>
  </div>
</template>

<script>
import getCurrentCityName from "../util/getUserLocation";

export default {
  methods: {
    GetLocation() {
      var position = document.getElementById("position");
      var options = {
        //   是否获取高精度位置
        enableHighAccuracy: true,
        // 获取位置信息的超时时间
        timeout: 5000,
        // 获取位置间隔事件，为0表示实时
        maximumAge: 0,
      };

    //   navigator.geolocation.getCurrentPosition(
    //     (data) => {
    //       console.log(data);
    //       var latitude = data.coords.latitude;
    //       var longitude = data.coords.longitude;

    //       const pointBak = new BMap.Point(longitude, latitude);
    //       const convertor = new BMap.Convertor();

    //       convertor.translate([pointBak], 1, 5, function (resPoint) {
    //         if (resPoint && resPoint.points && resPoint.points.length > 0) {
    //           longitude = resPoint.points[0].longitude;
    //           latitude = resPoint.points[0].latitude;
    //         }
    //         const point = new BMap.Point(longitude, latitude);
    //         const geo = new BMap.Geocoder();
    //         geo.getLocation(point, (res) => {});
    //       });

    navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
// });

          output.innerHTML =
            "<p>Latitude is " +
            latitude +
            "° <br>Longitude is " +
            longitude +
            "°</p>";
        },
        () => {
          console.log("失败");
          output.innerHTML = "无法获取您的位置";
        },
        options
      );
    },
  },
};
</script>

<style>
</style>