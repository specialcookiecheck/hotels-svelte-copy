<script lang="ts">
    import { onMount } from "svelte";
    import { get } from "svelte/store";
    import { currentSession } from "$lib/stores";
    import { hotelService } from "$lib/services/hotel-service";
    //import type { User, HotelList, Hotel } from "$lib/types/hotel-types";
    import HotelBrand from "./HotelBrand.svelte";

    
    //let user = hotelService.getUser(currentSession);
    let admin = false;

    /*
    onMount(async () => {
        user = await hotelService.getUser(currentSession._id);
        if (user.adminAccount) {
            admin = true;
        }
        console.log("user", user);
        console.log("admin", admin);
        //hotelLists = await hotelService.getHotelLists(get(currentSession));
        //hotels = await hotelService.getHotels(get(currentSession));
    });
    */
</script>


<nav class="navbar">
  <div class="navbar-brand">
    <HotelBrand />
  </div>
  <div class="navbar-menu" id="navMenu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a id="dashboard" class="button" href="/dashboard"> Dashboard </a>
          <a id="about" class="button" href="/about"> About </a>
          <a id="account" class="button" href="/account/{$currentSession._id}"> Account</a>
          <a data-sveltekit-preload-data="tap" id="logout" class="button" href="/logout"> Logout {$currentSession.name} </a>
        </div>
      </div>
    </div>
  </div>
</nav>


<!--

<nav class="navbar">
    <div class="navbar-brand">
      <HotelBrand />
    </div>
    <div class="navbar-menu" id="navMenu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            {#if admin}
            <a id="admin-dashboard" class="button" href="/admin"> Admin Dashboard </a>
            {:else}
            <a id="dashboard" class="button" href="/dashboard"> Dashboard </a>
            {/if}
            <a id="about" class="button" href="/about"> About </a>
            {#if admin}
            <a data-sveltekit-preload-data="tap" id="logout" class="button" href="/logout"> Logout [{$currentSession.name}] </a>
            {:else}
            <a id="account" class="button" href="/account/{user._id}"> Account</a>
            <a data-sveltekit-preload-data="tap" id="logout" class="button" href="/logout"> Logout [{$currentSession.name}] </a>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </nav>

-->