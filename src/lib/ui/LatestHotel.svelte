
<script lang="ts">
    import type { AddedHotel } from "$lib/types/hotel-types";

    export let latestHotel: AddedHotel;
</script>

<div>
    <h1>Latest hotel added:</h1>
    <h2>{latestHotel.name}</h2>
</div>