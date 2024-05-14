<script lang="ts">
    import { onMount } from "svelte";
    import { get } from "svelte/store";
    import { currentSession, subTitle } from "$lib/stores";
    import { hotelService } from "$lib/services/hotel-service";
    import type { User, HotelList, Hotel } from "$lib/types/hotel-types";
    import EverythingList from "$lib/ui/EverythingList.svelte";

    subTitle.set("Dashboard");

    let users: User[] = [];
    let hotelLists: HotelList[] = [];
    let hotels: Hotel[] = [];

    onMount(async () => {
        users = await hotelService.getUsers(get(currentSession));
        hotelLists = await hotelService.getHotelLists(get(currentSession));
        hotels = await hotelService.getHotels(get(currentSession));
    });

</script>

<EverythingList users={users} hotelLists={hotelLists} hotels={hotels}/>

