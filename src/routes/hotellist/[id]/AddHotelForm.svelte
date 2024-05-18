<script lang="ts">
    import type { User, HotelList, Hotel } from "$lib/types/hotel-types";

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
        <input class="input" type="text" placeholder="Enter hotel name" name="name" autofocus>
      </div>
      <div class="field">
        <input class="input" type="text" placeholder="Enter hotel city" name="city">
      </div>
      <div class="field">
        <input class="input" type="text" placeholder="Enter hotel country" name="country">
      </div>
      <div class="field">
        <input class="input" type="number" placeholder="Enter Hotel latitude" name="latitude">
      </div>
      <div class="field">
        <input class="input" type="number" placeholder="Enter Hotel longitude" name="longitude">
      </div>
      <div class="field">
        <input class="input" type="number" placeholder="Enter Hotel official stars" name="starRating">
      </div>
      <div class="field">
        <input class="input" type="number" placeholder="Enter your review stars" name="reviewRating">
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