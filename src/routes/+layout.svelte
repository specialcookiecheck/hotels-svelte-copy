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


<!--
<script lang="ts">
  import Heading from "$lib/ui/Heading.svelte";
  import Menu from "$lib/ui/Menu.svelte";
  import WelcomeMenu from "$lib/ui/WelcomeMenu.svelte";
  import { currentSession } from "$lib/stores";
  import { onMount } from 'svelte';
  import { session } from '$lib/session';
  import { goto } from '$app/navigation';
  import { signOut } from 'firebase/auth';
  import { auth } from '$lib/firebase.client';

  import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    type UserCredential
  } from 'firebase/auth';


  let email: string = '';
  let password: string = '';

  import type { LayoutData } from './$types';
  //export let data: LayoutData;

  let loading: boolean = true;
  let loggedIn: boolean = false;

  session.subscribe((cur: any) => {
    loading = cur?.loading;
    loggedIn = cur?.loggedIn;
  });

  export let data: any;
  if (data.session) {
    currentSession.set(data.session);
  } else {
    currentSession.set({ name: "", _id: "", token: "" });
  }

  onMount(async () => {
  const user: any = await data.getAuthUser();

  const loggedIn = !!user && user?.emailVerified;
  session.update((cur: any) => {
   loading = false;
   return {
    ...cur,
    user,
    loggedIn,
    loading: false
   };
  });

  if (loggedIn) {
   goto('/');
  }
 });
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

<!--
{#if loading}
 <div>Loading...</div>
{:else}
  <div>
   Logged in: {loggedIn}
   <slot />
  </div>
{/if}
-->



