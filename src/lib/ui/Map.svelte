<!-- <script src = "http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>  --> <!-- necessary script for map to work -->

<script>
	import { onDestroy, setContext } from 'svelte';
	import { mapbox, key } from './mapbox.js';

	setContext(key, {
		getMap: () => map
	});

	export let lat;
	export let lon;
	export let zoom;

	let container;
	let map;

	function load() {
		map = new mapbox.Map({
			container,
			style: 'mapbox://styles/mapbox/streets-v9',
			center: [lon, lat],
			zoom
		});
	}

	onDestroy(() => {
		if (map) map.remove();
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mapbox-gl/dist/mapbox-gl.css" on:load={load} />
</svelte:head>

<div bind:this={container}>
	{#if map}
		<slot />
	{/if}
</div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>


<!--
<script>
    import "http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js";
    import { onMount } from "svelte";
    //import type { Control, Map } from "leaflet";
    import L from "leaflet";
    //import type { Hotel } from "$lib/types/hotel-types";
    export let hotels; //: Hotel[];


    const map = L.map('map').setView([54, -6.4], 2);
  
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    /*
    let customIcon = {
        iconUrl: "https://cdn.iconscout.com/icon/free/png-256/free-hotel-512-453740.png",
        iconSize:[40,40]
    }

    let myIcon = L.icon(customIcon);

    let iconOptions = {
        title: `${hotel.name}`,
        riseOnHover: true,
        icon: myIcon,
    }
    */

    hotels.forEach(hotel => {
        var marker = L.marker([{hotel.latitude}, {hotel.longitude}], /*iconOptions*/).addTo(map);
    })
    
    

    /*
    {# if admin}
    marker.bindPopup("<b>{{name}}</b><br>{{houseNumber}} {{street}}<br>{{city}}<br>{{country}}<br>{{postcode}}<br><a href=\"/admin/hotellists/hotellist/{{hotelListid}}\">Open hotel list</a>"); //.openPopup();
    {{else}}
    
    marker.bindPopup("<b>{{name}}</b><br>{{houseNumber}} {{street}}<br>{{city}}<br>{{country}}<br>{{postcode}}<br><img src=\"{{imageURL}}\" width=\"50px\"><br><a href=\"/hotellist/{{hotelListid}}\">Open hotel list</a>"); //.openPopup();
    //{{/if}}
    
    {/each}
    */
    function onMapClick(e) {
        alert(`This location has the following coordinates: ${e.latlng.toString()}`);
    }
    map.on('click', onMapClick);
    
</script>
-->
