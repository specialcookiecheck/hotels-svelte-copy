<script lang="ts">
    import type { User, HotelList, Hotel } from "$lib/types/hotel-types";

    export let user: User;
    let admin = false;

</script>

<form class="box" action="?/addHotelList" method="POST">
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label class="label" for="title">Hotel list title</label> <input class="input" type="text" placeholder="Enter hotel list title" name="title" autofocus>
        </div>
        {#if admin}
        <div class="field">
          <label class="label" for="email">User Email</label> <input class="input" type="text" placeholder="Enter user email" name="email">
        </div>
        {:else}
        <input type="hidden" name="email" value="{user.email}"/>
        {/if}
      </div>
    </div>
    <button class="button is-link">Add Hotel list</button>
</form>