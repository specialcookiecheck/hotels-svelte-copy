<script lang="ts">
    import type { HotelList } from "$lib/types/hotel-types";

    export let hotelList: HotelList;
</script>

<form action="?/deleteHotelList" method="POST" class="ui icon button">
    <input type="hidden" name="hotelListId" value="{hotelList._id}"/>
    <button class="button"><i class="fas fa-trash"></i></button>
</form>