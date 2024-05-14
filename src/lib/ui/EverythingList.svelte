<script lang="ts">
    import type { User, HotelList, Hotel } from "$lib/types/hotel-types";

    export let users: User[];
    export let hotelLists: HotelList[];
    export let hotels: Hotel[];

</script>



<table class="table is-fullwidth">
    <thead>
      <th>Amount</th>
      <th>Method</th>
      <th>Candidate</th>
      <th>Donor</th>
    </thead>

    <tbody>
      {#each hotelLists as hotelList}
        <tr>
          <td>
            {hotelList._id}
          </td>
          <td>
            {hotelList.title}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

  <table class="table is-fullwidth">
    <thead>
      <th>Amount</th>
      <th>Method</th>
      <th>Candidate</th>
      <th>Donor</th>
    </thead>
    <tbody>
      {#each hotels as hotel}
        <tr>
          <td>
            {hotel._id}
          </td>
          <td>
            {hotel.name}
          </td>
          <td>
            {hotel.country}
          </td>
          <td>
            {hotel.latitude}
          </td>
          <td>
            {#if typeof hotel.hotelListId !== "string"}
              {hotel.name}, {hotel.country}
            {/if}
          </td>
          <td>
            {#if typeof hotel.name !== "string"}
            {hotel.name}, {hotel.country}
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
</table>

  <table class="table is-fullwidth">
    <thead>
      <th>Amount</th>
      <th>Method</th>
      <th>Candidate</th>
      <th>Donor</th>
    </thead>
    <tbody>
      {#each users as user}
        <tr>
          <td>
            {user.email}
          </td>
          <td>
            {user.firstName}
          </td>
          <td>
            {user.lastName}
          </td>
          <td>
            {user.password}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

