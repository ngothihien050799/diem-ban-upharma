<template>
  <div class="map row">
    <div class="map-header">ĐỘ PHỦ NHÀ THUỐC UPHARMA</div>
    <div class="map-item col-sm-12 col-md-12">
      <l-map style="height: 500px" :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="markerLatLng"></l-marker>
      </l-map>
    </div>
    <div class="map-list col-sm-12 col-md-12"><TableMap /></div>
  </div>
</template>

<script>
import TableMap from "./TableMap.vue";
import { LMap, LTileLayer, LMarker } from "vue3-leaflet";

export default {
  components: {
    TableMap,
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 10, //tỷ lệ thu phóng bản đồ
      center: [20.9967994, 105.8407837], //vị trí bản đồ
      markerLatLng: [20.9967994, 105.8407837], //vị trí marker
    };
  },
};
</script>

<style lang="scss" scoped>
.map {
  padding: 20px;
  &-header {
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 20px;
    /* identical to box height, or 100% */

    text-align: center;

    /* Band color */

    background: linear-gradient(180deg, #1d974a 0%, #1d974a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &-list {
      text-align: center;
    }
  }
}
</style>
<style>
.map-item {
  min-height: 200px !important;
  margin-bottom: 10px;
}
</style>
