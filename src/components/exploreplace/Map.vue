<template lang="pug">
v-container(fluid, py-0)
  v-row
    .map 
  v-row
    v-dialog(
      v-model="dialog",
      width="450",
      @click:outside="$refs.dialog.cardHeight = undefined"
    )
      PlaceInfoDialog(ref="dialog")
</template>


<script>
import gmapsInit from "@/utils/gmaps";
import PlaceInfoDialog from "@/components/exploreplace/PlaceInfoDialog";
import pin from "@/assets/pin.png";
import { mapState } from "vuex";
//import mapStyle from "@/plugins/mapstyle.js";

export default {
  data() {
    return {
      dialog: false,
      google: null,
      map: null,
      zoom: null,
      makersOnMap: [],
      reset: null,
    };
  },
  computed: {
    ...mapState("map", ["marks", "addMarksID", "removeMarksID"]),
    ...mapState(["selectTags"]),
  },
  components: {
    PlaceInfoDialog,
  },
  watch: {
    dialog() {},
    selectTags() {
      //待測試
      const bounds = this.map.getBounds();
      const from = bounds.getSouthWest();
      const to = bounds.getNorthEast();
      this.$store
        .dispatch("map/getMarksInArea", {
          from: { lon: from.lng(), lat: from.lat() },
          to: { lon: to.lng(), lat: to.lat() },
          filter: this.selectTags.map((t) => t.id),
        })
        .then(() => {
          const bounds = this.setMarkers(this.marks);
          this.map.fitBounds(bounds);
        });
    },
  },
  methods: {
    handleClick(event) {
      console.log("You clicked on: " + event.latLng);

      if (event.placeId) {
        console.log("You clicked on place:" + event.placeId);

        event.stop();
        // this.getPlaceInformation(event.placeId);
      }
    },

    getPlaceInformation(placeId) {
      this.placesService.getDetails({ placeId: placeId }, (place, status) => {
        if (status === "OK") {
          this.placeDetails.location = place.geometry.location;
          this.placeDetails.photo = place.photos[0].getUrl();
          this.placeDetails.name = place.name;
          this.placeDetails.id = place.place_id;
          this.placeDetails.address = place.formatted_address;
        }
      });
    },
    setMarkers() {
      const map = this.map;
      const image = {
        url: pin,
        size: new this.google.maps.Size(46, 57),
        origin: new this.google.maps.Point(0, 0),
        anchor: new this.google.maps.Point(23, 57),
      };
      const shape = {
        coords: [23, 29, 30],
        type: "circle",
      };
      const bounds = new this.google.maps.LatLngBounds();

      for (let i = 0; i < this.removeMarksID.length; i++) {
        const index = this.makersOnMap
          .map((m) => m.gmap_id)
          .indexOf(this.removeMarksID[i]);
        if (index > -1) {
          this.makersOnMap[index].setMap(null);
          this.makersOnMap.splice(index, 1);
        }
      }

      for (let i = 0; i < this.marks.length; i++) {
        bounds.extend(
          new this.google.maps.LatLng(
            parseFloat(this.marks[i].location.lat),
            parseFloat(this.marks[i].location.lon)
          )
        );
        if (
          this.makersOnMap.map((m) => m.gmap_id).includes(this.marks[i].gmap_id)
        ) {
          continue;
        }
        const marker = new this.google.maps.Marker({
          position: {
            lat: this.marks[i].location.lat,
            lng: this.marks[i].location.lon,
          },
          map,
          icon: image,
          shape: shape,
          gmap_id: this.marks[i].gmap_id,
        });

        this.makersOnMap.push(marker);

        marker.addListener("click", () => {
          this.$store
            .dispatch("map/getPlaceInfo", { gmap_id: marker.gmap_id })
            .then(() => (this.dialog = true));

          console.log(marker);
        });
      }
      return bounds;
    },
  },

  async mounted() {
    this.google = await gmapsInit();
    this.map = new this.google.maps.Map(this.$el.querySelector(".map"), {
      disableDefaultUI: true,
      mapId: "9524df6228dc9370",
      useStaticMap: true,
    });

    await this.$store.dispatch("map/getMarksInArea", {
      from: { lon: 117.08797285742689, lat: 20.312130507214118 },
      to: { lon: 126.04402767903734, lat: 27.559374641180497 },
      filter: this.selectTags.map((t) => t.id),
    });

    //待測試
    const bounds = this.setMarkers(this.marks);
    this.map.fitBounds(bounds);

    this.map.addListener("click", this.handleClick);
    this.map.addListener("zoom_changed", () => {
      this.zoom = this.map.getZoom();
      console.log(this.zoom);
    });
    this.map.addListener("idle", () => {
      const bounds = this.map.getBounds();
      const from = bounds.getSouthWest();
      const to = bounds.getNorthEast();
      this.$store
        .dispatch("map/getMarksInArea", {
          from: { lon: from.lng(), lat: from.lat() },
          to: { lon: to.lng(), lat: to.lat() },
          filter: this.selectTags.map((t) => t.id),
        })
        .then(() => {
          //待測試
          this.setMarkers(this.marks);
        });
    });
  },
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}
.map-container {
  position: relative;
  width: 100%;
  height: 100vh;
}
.map {
  position: relative;
  width: 100%;
  height: 100vh;
}

.infowindow-content.active {
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>