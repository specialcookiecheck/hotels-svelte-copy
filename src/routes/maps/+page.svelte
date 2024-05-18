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

    onMount(async () => {
        //console.log("data.session:", data.session);
        //const hotels = await hotelService.getHotels(get(data.session));
        const hotels = data.hotels;
        console.log("hotels returned, logging hotels");
        console.log(hotels);
        hotels.forEach((hotel: Hotel) => {
            map1.addMarker(hotel);
            map2.addMarker(hotel);
            map3.addMarker(hotel);
      });
    });
</script>


<LeafletMap height={580} bind:this={map1} id={"map1"}/>

<LeafletMap height={580} bind:this={map2} id={"map2"}/>

<LeafletMap height={580} bind:this={map3} id={"map3"}/>


