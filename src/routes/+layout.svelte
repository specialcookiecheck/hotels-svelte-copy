<script lang="ts">
    import { browser } from "$app/environment";
    import { currentSession } from "$lib/stores";
    import Heading from "$lib/ui/Heading.svelte";
    import Menu from "$lib/ui/Menu.svelte";
    import WelcomeMenu from "$lib/ui/WelcomeMenu.svelte";
  
    if (browser) {
      const savedSession = localStorage.hotel;
      if (savedSession) {
        const session = JSON.parse(savedSession);
        currentSession.set(session);
      }
    }
</script>
  
<div class="container">
  {#if $currentSession?.token}
    <Menu />
    <Heading />
  {:else}
    <WelcomeMenu />
  {/if}

  <slot />
</div>

