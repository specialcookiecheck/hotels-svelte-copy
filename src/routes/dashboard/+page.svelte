<script lang="ts">
    import EverythingList from "$lib/ui/EverythingList.svelte";
    import AddHotelListForm from "./AddHotelListForm.svelte";
    import ListHotelLists from "$lib/ui/ListHotelLists.svelte";
    
    export let data: any;

</script>

<AddHotelListForm user={data.user} />

<ListHotelLists hotelLists={data.hotelLists}/>

<!--<EverythingList users={data.users} hotelLists={data.hotelLists} hotels={data.hotels} user={data.user}/>-->



