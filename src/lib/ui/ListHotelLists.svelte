<script lang="ts">
    import type { HotelList } from "$lib/types/hotel-types";
    import DeleteHotelListForm from "../../routes/dashboard/DeleteHotelListForm.svelte";
    import HotelsMap from "../../routes/dashboard/HotelsMap.svelte";

    export let hotelLists: HotelList[];
</script>

<section class="section box">
    <div class="has-text-centered">
        <!--
      {#if @root.admin}
      <h1 class="title">Hotel Lists for All Users</h1>
      {:else}
        -->
      <h1 class="title">Your saved Hotel Lists</h1>
      <!--{/if}-->
      <br>
    </div>
  
  {#each hotelLists as hotelList}
  
  <!--
  {#if @root.admin}
    <div class="box box-link-hover-shadow">
      <div class="box">
        <h3>List Name:<br>
          {title}
        </h3>
        <h3>List Id:<br>
          {_id}
        </h3>
        <h3>User Email:<br>
          {user.email}
        </h3>
  
        <a href="/admin/hotellists/hotellist/{_id}" class="button">
        <span class="icon is-small">
            <i class="fas fa-folder-open"></i>
          </span>
        </a>
        <a href="/admin/hotellists/deletehotellist/{_id}" class="button">
          <i class="fas fa-trash"></i>
        </a>
      </div>
  {/if}
  
  {#unless @root.admin}

  -->

  <div class="box box-link-hover-shadow">
      <h3 class="title">{hotelList.title}</h3>
      <a href="/hotellist/{hotelList._id}" class="button">
      <span class="icon is-small">
          <i class="fas fa-folder-open"></i>
        </span>
      </a>
      <DeleteHotelListForm hotelList={hotelList} />
  <!--{/unless}-->
  
  
  <!--{#if ../displayHotels}
    {> list-hotels}
  {/if}-->
  </div>
    
  {/each}
  </section>
  
  <section class="section box">
    <div class="has-text-centered">
      <h2 class="title">All your favourite hotels everywhere!</h2>
      <br>
    </div>
    <div>
      <!--<HotelsMap />-->
    </div>
  </section>

  