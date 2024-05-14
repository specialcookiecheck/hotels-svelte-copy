<script lang="ts">
    import { goto } from "$app/navigation";
    import { hotelService } from "$lib/services/hotel-service";
    import { currentSession } from "$lib/stores";
    import Message from "$lib/ui/Message.svelte";
    import UserCredentials from "$lib/ui/UserCredentials.svelte";
  
    let email = "";
    let password = "";
    let message = "";
  
    async function login() {
      console.log(`attemting to log in email: ${email} with password: ${password}`);
      let session = await hotelService.login(email, password);
      if (session) {
        currentSession.set(session);
        localStorage.hotel = JSON.stringify(session);
        goto("/dashboard");
      } else {
        email = "";
        password = "";
        message = "Invalid Credentials";
      }
    }
  </script>
  
  {#if message}
    <Message {message} />
  {/if}
  <form on:submit|preventDefault={login}>
    <UserCredentials bind:email bind:password />
    <button class="button is-success is-fullwidth">Log In</button>
  </form>