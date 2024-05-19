<script lang=ts>
    import AddHotelImageForm from "./AddHotelImageForm.svelte";
    import HotelImagesDisplay from "$lib/ui/HotelImagesDisplay.svelte";
    import type { Hotel } from "$lib/types/hotel-types";
    import { subTitle } from "$lib/stores";
    import { onMount } from "svelte";
    //import HotelLeafletMap from "./maps/HotelLeafletMap.svelte";
    
    export let data: any;
    subTitle.set("Hotel! " + data.hotel.name);

    /*
    
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
    */

</script>

<div class="box" style="text-align:center;">
    <a href="/hotellist/{data.hotel.hotelListid}/hotel/{data.hotel._id}/maps" class="button is-link">Open {data.hotel.name} maps</a>
</div>

<div class="box" style="text-align:center;">
    <a href="/hotellist/{data.hotel.hotelListid}/hotel/{data.hotel._id}/charts" class="button is-link">Open {data.hotel.name} weather charts</a>
</div>


<!--
{#each Object.entries(data.hotel) as [key, value]}
    <h2><strong>{key}</strong></h2>
    {#if key === "imageUrlArray"}
        <img src="{ Object.keys(data.hotel.imageUrlArray[0]) }" alt="hotel">
    {:else}
        {@html value}
    {/if}
{/each}
-->

<AddHotelImageForm hotel={data.hotel}/>

<HotelImagesDisplay imageArray={data.hotel.imageUrlArray} hotelId={data.hotel._id} hotelName={data.hotel.name} />