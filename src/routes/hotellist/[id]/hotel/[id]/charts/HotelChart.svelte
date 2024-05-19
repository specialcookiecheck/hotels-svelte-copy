<script lang="ts">
  import type { Hotel } from "$lib/types/hotel-types";
  import Chart from "svelte-frappe-charts";

  export let hotel: Hotel;
  export let id: string;
  export let data: any;

</script>
  

<div id={id} class="box">
  <Chart data={data}/>
</div>