<script lang="ts">
    import type { HotelList } from "$lib/types/hotel-types";

    export let hotelList: HotelList;
    let admin = false;
</script>

<!--
{#if admin}
<form class="box" action="/hotellist?/{hotelList._id}?/addHotel" method="POST">
    <label for="name">Enter Hotel Details:</label>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <input class="input" type="text" placeholder="Enter hotel name" name="name" autofocus>
      </div>
      <div class="field">
        <input class="input" type="text" placeholder="Enter hotel city" name="city">
      </div>
      <div class="field">
        <input class="input" type="text" placeholder="Enter hotel country" name="country">
      </div>
      <div class="field">
        <input class="input" type="text" placeholder="Enter Hotel latitude" name="latitude">
      </div>
      <div class="field">
        <input class="input" type="text" placeholder="Enter Hotel longitude" name="longitude">
      </div>
      {#if admin}
      <div class="field">
        <input class="input" type="text" placeholder="Enter hotel list title" name="hotelListTitle">
      </div>
      <div class="field">
        <input class="input" type="text" placeholder="Enter user email" name="userEmail">
      </div>
      {/if}
    </div>
  </div>
  <button class="button is-link">Add Hotel</button>
</form>

{:else}

-->

<form class="box" action="?/addHotel" method="POST">
  <label for="name">Enter Hotel Details:</label>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <input class="input" type="text" placeholder="Hotel Name" name="name" size="15">
      </div>
      <div class="field">
        <input class="input" type="text" placeholder="City" name="city" size="15">
      </div>
      <div class="field">
        <input class="input" type="text" placeholder="Country" name="country" size="15">
      </div>
      <div class="field">
        <input class="input" type="number" step="0.1" placeholder="Latitude" name="latitude" style="width: 130px">
      </div>
      <div class="field">
        <input class="input" type="number" step="0.1" placeholder="Longitude" name="longitude" style="width: 130px">
      </div>
      <div class="field">
        <input class="input" type="number" step="1" min="1" max="5" placeholder="Official stars" name="starRating" style="width: 130px">
      </div>
      <div class="field">
        <input class="input" type="number" step="1" min="1" max="5" placeholder="Review stars" name="reviewRating" style="width: 130px">
      </div>
      {#if admin}
      <div class="field">
        <input class="input" type="text" placeholder="Enter hotel list title" name="hotelListTitle">
      </div>
      <div class="field">
        <input class="input" type="text" placeholder="Enter user email" name="userEmail">
      </div>
      {/if}
      <input type="hidden" placeholder="hotelListId" name="hotelListId" value="{hotelList._id}"/>
    </div>
  </div>
  <button class="button is-link">Add Hotel</button>
</form>

<!--{/if}-->