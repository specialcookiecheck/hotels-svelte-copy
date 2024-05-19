<script lang="ts">
    import { hotelListService } from "$lib/services/hotelList-service";

    export let imageArray = [];
    export let hotelId = String;
    export let hotelName = String;

    export let displayDeleteIcon = false;

    export function toggleDeleteIcon() {
        if (displayDeleteIcon === false) {
            displayDeleteIcon = true;
        }
    }
</script>

<h1>{imageArray}</h1>

{#each imageArray as image}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div style="position: relative; display: block;"
        on:mouseenter={() => {
            console.log("on image div");
            displayDeleteIcon = true;
        }}
        on:mouseleave={() => {
            console.log("not on image div");
            displayDeleteIcon = false;
        }}>
        <h2>{hotelId}, {hotelName}</h2>
        <img src={image} alt="hotel">

        {#if displayDeleteIcon }
        <div id="deleteImage" style="float: left; position: absolute; max-width: 100%; top: 50%; left: 50%;">
            <form action="?/deleteImage" method="POST" class="ui icon button">
                <input type="hidden" name="hotelId" value="{hotelId}"/>
                <input type="hidden" name="imageUrl" value="{image}"/>
                <button class="button"><i class="fas fa-trash"></i></button>
            </form>
        </div>
        {/if}
    </div>
{/each}