<script>
import {link} from 'svelte-spa-router'
export let display, nextPageDisplay;
console.log(display);

</script>

<!-- Markup -->
{#if display}
<hr />
<div class="paginate_wrap text-center ">
  <div class="btn-group mb-4" role="group" aria-label="Basic example">
    <button class="btn btn-lg btn-outline-dark " type="button" id="button-addon2"
    on:click={nextPageDisplay}>next page ⇒
   </button>
  </div>

</div>
{/if}
