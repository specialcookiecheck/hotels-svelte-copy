<script lang="ts">
    import type { Hotel } from "$lib/types/hotel-types";

    export let hotel: Hotel;
</script>


<form action="?/deleteHotel" method="POST" class="ui icon button">
    <input type="hidden" name="hotelId" value="{hotel._id}"/>
    <button class="button"><i class="fas fa-trash"></i></button>
</form>