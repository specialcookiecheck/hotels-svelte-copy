<!-- <script src = "http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>  --> <!-- necessary script for map to work -->

<script lang="ts">
    /*
    import "http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js";
    import { onMount } from "svelte";
    import type { Control, Map } from "leaflet";
    import type { Hotel } from "$lib/types/hotel-types";
    export let hotels: Hotel[];

    const map = L.map('map').setView([54, -6.4], 2);
  
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);


    let customIcon = {
        iconUrl: "https://cdn.iconscout.com/icon/free/png-256/free-hotel-512-453740.png",
        iconSize:[40,40]
    }

    let myIcon = L.icon(customIcon);

    let iconOptions = {
        title: "{hotelname}",
        riseOnHover: true,
        icon: myIcon,
    }

    {#each hotels as hotel}  
    
    var marker = L.marker([{hotel.atitude}, {hotel.longitude}], iconOptions).addTo(map);

    /*
    {# if admin}
    marker.bindPopup("<b>{{name}}</b><br>{{houseNumber}} {{street}}<br>{{city}}<br>{{country}}<br>{{postcode}}<br><a href=\"/admin/hotellists/hotellist/{{hotelListid}}\">Open hotel list</a>"); //.openPopup();
    {{else}}
    
    marker.bindPopup("<b>{{name}}</b><br>{{houseNumber}} {{street}}<br>{{city}}<br>{{country}}<br>{{postcode}}<br><img src=\"{{imageURL}}\" width=\"50px\"><br><a href=\"/hotellist/{{hotelListid}}\">Open hotel list</a>"); //.openPopup();
    //{{/if}}
    
    {/each}
    
    function onMapClick(e) {
        alert(`This location has the following coordinates: ${e.latlng.toString()}`);
    }
    map.on('click', onMapClick);
    */
</script>