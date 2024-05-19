<script lang=ts>
    import type { Hotel } from "$lib/types/hotel-types";
    import { subTitle } from "$lib/stores";
    import { onMount } from "svelte";
    import HotelLeafletMap from "./HotelLeafletMap.svelte";
    
    export let data: any;
    subTitle.set("Hotel! " + data.hotel.name);

    
    let map1: HotelLeafletMap;
    let map2: HotelLeafletMap;
    let map3: HotelLeafletMap;
    let official5Ratings: Hotel[] = [];
    let official5RatingsLayerGroup = [];

    onMount(async () => {
        const hotelMarkerMap1 = map1.addMarker(data.hotel);
        const hotelMarkerMap2 = map2.addMarker(data.hotel);
        const hotelMarkerMap3 = map3.addMarker(data.hotel);
    });

</script>

<HotelLeafletMap height={200} bind:this={map1} id={"map1"} hotel={data.hotel}/>

<HotelLeafletMap height={200} bind:this={map2} id={"map2"} hotel={data.hotel}/>

<HotelLeafletMap height={200} bind:this={map3} id={"map3"} hotel={data.hotel}/>