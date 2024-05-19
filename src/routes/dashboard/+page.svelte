<script lang="ts">
    //import EverythingList from "$lib/ui/EverythingList.svelte";
    import AddHotelListForm from "./AddHotelListForm.svelte";
    import ListHotelLists from "$lib/ui/ListHotelLists.svelte";
    import { subTitle } from "$lib/stores";

    export let data: any;
    subTitle.set(data.user.firstName + ", welcome to your Hotel! Dashboard!");
    
    
    

    //export let addedHotels: AddedHotel[] = [];

</script>

<!--<LatestHotel latestHotel={latestHotel} />-->

<AddHotelListForm user={data.user} />

<ListHotelLists hotelLists={data.hotelLists}/>

<!--<EverythingList users={data.users} hotelLists={data.hotelLists} hotels={data.hotels} user={data.user}/>-->



