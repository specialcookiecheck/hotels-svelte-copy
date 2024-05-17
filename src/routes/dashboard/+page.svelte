<script lang="ts">
    import EverythingList from "$lib/ui/EverythingList.svelte";
    // import LatestHotel from "$lib/ui/LatestHotel.svelte";
    import AddHotelListForm from "./AddHotelListForm.svelte";
    import ListHotelLists from "$lib/ui/ListHotelLists.svelte";
    // import type { AddedHotel } from "$lib/types/hotel-types";
    // import { latestHotel } from "$lib/stores";
    
    export let data: any;

    //export let addedHotels: AddedHotel[] = [];

</script>

<!--<LatestHotel latestHotel={latestHotel} />-->

<AddHotelListForm user={data.user} />

<ListHotelLists hotelLists={data.hotelLists}/>

<!--<EverythingList users={data.users} hotelLists={data.hotelLists} hotels={data.hotels} user={data.user}/>-->



