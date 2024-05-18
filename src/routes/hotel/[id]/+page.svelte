<script lang=ts>
    import { hotelService } from "$lib/services/hotel-service";
    import type { Hotel } from "$lib/types/hotel-types";
    import AddHotelImageForm from "./AddHotelImageForm.svelte";

    export let data: any;

</script>
<h1><strong>{data.hotel.name}</strong></h1>
<h2>{data.hotel.imageUrlArray}</h2>
<h2>{console.log(data.hotel.imageUrlArray)}</h2>
<br>

{#each Object.entries(data.hotel) as [key, value]}
    <h2><strong>{key}</strong></h2>
    {@html value}
{/each}

<AddHotelImageForm hotel={data.hotel}/>