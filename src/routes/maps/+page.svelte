<script lang="ts">
    import { hotelService } from "$lib/services/hotel-service";
    import LeafletMap from "$lib/ui/LeafletMap.svelte";
    import { onMount } from "svelte";
    import type { Hotel } from "$lib/types/hotel-types";
    import { get } from "svelte/store";
    import { currentSession, subTitle } from "$lib/stores";

    subTitle.set("Hotels!");

    export let data: any;
    
    let map: LeafletMap;

    onMount(async () => {
        //console.log("data.session:", data.session);
        //const hotels = await hotelService.getHotels(get(data.session));
        const hotels = data.hotels;
        console.log("hotels returned, logging hotels");
        console.log(hotels);
        hotels.forEach((hotel: Hotel) => {
            map.addMarker(hotel.latitude, hotel.longitude);
      });
    });
</script>


<LeafletMap height={100} bind:this={map} />

