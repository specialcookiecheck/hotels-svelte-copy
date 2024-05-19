<script lang=ts>
    import { hotelService } from "$lib/services/hotel-service";
    import type { Hotel } from "$lib/types/hotel-types";
    import AddHotelImageForm from "./AddHotelImageForm.svelte";
    import HotelImagesDisplay from "../../../lib/ui/HotelImagesDisplay.svelte";

    export let data: any;


</script>
<h1><strong>{data.hotel.name}</strong></h1>
<h2>{data.hotel.imageUrlArray}</h2>
<br>

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

<HotelImagesDisplay imageArray={data.hotel.imageUrlArray} hotelId={data.hotel._id} />