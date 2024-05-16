<script lang="ts">
  import Heading from "$lib/ui/Heading.svelte";
  import Menu from "$lib/ui/Menu.svelte";
  import WelcomeMenu from "$lib/ui/WelcomeMenu.svelte";
  import { currentSession } from "$lib/stores";

  export let data: any;
  if (data.session) {
    currentSession.set(data.session);
  } else {
    currentSession.set({ name: "", _id: "", token: "" });
  }
</script>

<div class="container">
  {#if $currentSession.token}
    <Menu />
    <Heading />
  {:else}
    <WelcomeMenu />
  {/if}
  <slot />
</div>



