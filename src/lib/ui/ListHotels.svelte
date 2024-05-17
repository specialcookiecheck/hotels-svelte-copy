<script lang="ts">
    import type { Hotel } from "$lib/types/hotel-types";
    import { hotelService } from "$lib/services/hotel-service";
    import DeleteHotelForm from "../../routes/hotellist/[id]/DeleteHotelForm.svelte";
    import HotelsMap from "../../routes/dashboard/HotelsMap.svelte";

    export let hotels: Hotel[];
</script>

<table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Hotel name</th>
        <th>City</th>
        <th>Country</th>
  
        <!--{#unless @root.admin}-->
        <td></td>
        <!--{/unless}-->
  <!--
        {#if @root.admin}
        <th>hotelId</td>
        <th>hotelListId</td>
        <th>latitude</th>
        <th>longitude</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
        {#each hotels}
  
          <tr>
            <td>
              <a href={imageURL} target="_blank">{name}</a>
            </td>
            <td>
              {city}
            </td>
            <td>
              {country}
            </td>
            <td>
              {_id}
            </td>
            <td>
              {hotelListid}
            </td>
            <td>
              {latitude}
            </td>
            <td>
              {longitude}
            </td>
            <td> 
              {#if hotelListid}
              <a href="/admin/hotellists/hotellist/{hotelListid}/deletehotel/{_id}" class="ui icon button">
                <i class="fas fa-trash"></i>
              </a>
              {else}
              <a href="/admin/hotels/deletehotel/{_id}" class="ui icon button">
                <i class="fas fa-trash"></i>
              </a>
              {/if}
            </td>
          </tr>
  
        {/each}
        </tbody>
        {/if}
    
  
        {#unless @root.admin}
-->

    </thead>
    <tbody>
      
        {#each hotels as hotel}
          <tr>
            <td>
              <a href={hotel.imageURL} target="_blank">{hotel.name}</a>
            </td>
            <td>
              {hotel.city}
            </td>
            <td>
              {hotel.country}
            </td>
            <td>
              <a href="/hotellist/{hotel.hotelListid}/deletehotel/{hotel._id}" class="ui icon button">
                <i class="fas fa-trash"></i>
              </a>
            </td>
            <td>
              <DeleteHotelForm hotel={hotel} />
            </td>
          </tr>
        {/each}
  
      </tbody>
      <!--{/unless}-->
  
  </table>

  <!--<HotelsMap hotels={hotels} />-->