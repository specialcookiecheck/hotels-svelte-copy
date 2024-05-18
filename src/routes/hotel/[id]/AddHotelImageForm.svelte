<script lang="ts">
    import type { User, HotelList, Hotel } from "$lib/types/hotel-types";

    export let hotel: Hotel;
    let admin = false;

</script>

<form class="box" action="?/addHotelImage" method="POST">
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label class="label" for="imageUrl">Image URL</label> <input class="input" type="text" placeholder="Enter hotel image URL" name="imageUrl" autofocus>
        </div>
        {#if admin}
        <div class="field">
          <label class="label" for="email">User Email</label> <input class="input" type="text" placeholder="Enter user email" name="email">
        </div>
        {:else}
        <input type="hidden" name="hotelId" value="{hotel._id}"/>
        {/if}
      </div>
    </div>
    <button class="button is-link">Add Hotel Image</button>
</form>