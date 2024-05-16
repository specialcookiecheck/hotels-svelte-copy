<script lang="ts">
    import { subTitle } from "$lib/stores";
    import EverythingList from "$lib/ui/EverythingList.svelte";
    //import AddHotelListForm from "./AddHotelListForm.svelte";
    import ListHotelLists from "$lib/ui/ListHotelLists.svelte";
    import ListHotels from "$lib/ui/ListHotels.svelte";

    subTitle.set("Dashboard");

    export let data: any;

</script>

<section class="section">
    <div class="title">
      {data.hotelList.title}
    </div>

    <ListHotels hotels={data.hotels}/>
    <!--
    {> list-hotels}
    {> add-hotel}
    {> error}
    {> map-with-search}
    -->
</section>