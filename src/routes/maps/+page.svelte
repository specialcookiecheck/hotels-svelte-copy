<script lang="ts">
    import { hotelService } from "$lib/services/hotel-service";
    import LeafletMap from "$lib/ui/LeafletMap.svelte";
    import { onMount } from "svelte";
    import type { Hotel } from "$lib/types/hotel-types";
    import { get } from "svelte/store";
    import { currentSession, subTitle } from "$lib/stores";
  

    subTitle.set("Hotels!");

    export let data: any;
    
    let map1: LeafletMap;
    let map2: LeafletMap;
    let map3: LeafletMap;
    let official5Ratings: Hotel[] = [];
    let official5RatingsLayerGroup = [];

    onMount(async () => {
        //console.log("data.session:", data.session);
        //const hotels = await hotelService.getHotels(get(data.session));
        const hotels = data.hotels;
        await hotels.forEach((hotel: Hotel) => {
            console.log(hotel)
            const hotelMarkerMap1 = map1.addMarker(hotel);
            const hotelMarkerMap2 = map2.addMarker(hotel);
            const hotelMarkerMap3 = map3.addMarker(hotel);
        
            /*
        if (hotel.starRating != undefined && hotel.starRating === "5") {
            console.log("5 star:", hotel)
            official5Ratings.push(hotel);
            //official5RatingsLayerGroup.push(hotelMarkerMap1);
            console.log("official5Ratings", official5Ratings);
            //console.log("official5RatingsLayerGroup", official5RatingsLayerGroup);
        }
        //const official5RatingsLayer = L.layerGroup(official5Ratings);
        */
      });
    });
</script>


<LeafletMap height={580} bind:this={map1} id={"map1"} />

<LeafletMap height={580} bind:this={map2} id={"map2"} />

<LeafletMap height={580} bind:this={map3} id={"map3"} />


