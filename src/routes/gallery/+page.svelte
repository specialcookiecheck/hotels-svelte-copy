<script lang="ts">
    import HotelImagesDisplay from "$lib/ui/HotelImagesDisplay.svelte";
    import { subTitle } from "$lib/stores";

    subTitle.set("Gallery");

    export let data: any;

</script>

{#each data.hotels as hotel}
    <HotelImagesDisplay imageArray={hotel.imageUrlArray} hotelId={hotel._id} hotelName={hotel.name}/>
{/each}