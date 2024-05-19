
<script lang="ts">
    import "leaflet/dist/leaflet.css";
    import { onMount } from "svelte";
    import type { Control, Map as LeafletMap } from "leaflet";
    import L from "leaflet";
    import { browser } from "$app/environment";
    import type { Hotel } from "$lib/types/hotel-types";
    //export const ssr = false;

    export let hotel: Hotel;
    export let id: string;
    //export let official5Ratings = [];
    export let height = 80;
    export let zoomLevel: number;
    //export let weather: any;
    export let activeLayer: string;
    if (id === "map1") {
      activeLayer = "Terrain"
      zoomLevel = 15;
    }
    else if (id === "map2") {
      activeLayer = "Satellite"
      zoomLevel = 15;
    } else {
      activeLayer = "Terrain";
      zoomLevel = 2;
    }
    
  
    let map: LeafletMap;
    let control: Control.Layers;
    let overlays: Control.LayersObject = {};
    let baseLayers: any;
    let icon: any;
  
    onMount(async () => {
      if (browser) {
          const leaflet = await import("leaflet");
          console.log(parseFloat(hotel.latitude), parseFloat(hotel.longitude));
          console.log(typeof parseFloat(hotel.latitude));
          //console.log(official5Ratings);
          //const official5RatingsLayer = L.layerGroup(official5Ratings);
          //overlays = {"official5RatingsLayer": official5RatingsLayer}
          baseLayers = {
            Terrain: leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              maxZoom: 19,
              attribution:
                'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
            }),
            Satellite: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
              maxZoom: 19,
              attribution: "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          })
          };
          let defaultLayer = baseLayers[activeLayer];
          
          map = leaflet.map(id, {
            //center: [location.lat, location.lng],
            //zoom: zoom,
            //minZoom: minZoom,
            
            layers: [defaultLayer]
          }).setView([parseFloat(hotel.latitude), parseFloat(hotel.longitude)], zoomLevel).on('click', onMapClick);
          control = leaflet.control.layers(baseLayers, overlays).addTo(map);
        }
    });
  
    export async function addMarker(hotel) {
      if (browser) {
        const leaflet = await import("leaflet");
        const popupText = `<b>${hotel.name}</b><br>${hotel.houseNumber} ${hotel.street}<br>${hotel.city}<br>${hotel.country}<br>${hotel.postcode}<br>Official: ${hotel.starRating} Review: ${hotel.reviewRating}<br><br><br>Weather (now): ${hotel.weatherDescription} <img src=\"${hotel.weatherIconUrl}\"><br><img src=\"${hotel.imageURL}\" width=\"50px\"><br><a href=\"/hotellist/${hotel.hotelListid}\">Open hotel list</a>`

        icon = L.icon({
          iconUrl: "https://cdn.iconscout.com/icon/free/png-256/free-hotel-512-453740.png",
          iconSize: [40, 40],
        });

        let iconOptions = {
            title: `${hotel.name}`,
            riseOnHover: true,
            icon: icon,
        }
        
        const marker = leaflet.marker([hotel.latitude, hotel.longitude], iconOptions);
        marker.addTo(map);
        const popup = leaflet.popup({ autoClose: false, closeOnClick: false });
        popup.setContent(popupText);

        /*
        if (hotel.starRating != undefined && hotel.starRating === 5) {
          console.log("attempting 5 star rating add");
          official5Ratings.push(marker.bindPopup(popup));
          console.log("official5Ratings", official5Ratings)
        }
        */

        return marker.bindPopup(popup);
      }
    }
      

    
    function onMapClick(e) {
        alert(`This location has the following coordinates: ${e.latlng.toString()}`);
    }

    /*
    export function moveTo(lat: number, lng: number) {
      map.flyTo({ lat: lat, lng: lng });
    }
    */
  </script>
  
  <div id={id} class="box" style="height: {height}px" />






