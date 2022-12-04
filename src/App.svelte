<script lang="ts">
import Router from 'svelte-spa-router';
export let name: string;

import Navi from './components/Navi.svelte'	
import index from './pages/index.svelte';
//import test from  './pages/test.svelte';
/* posts */
import posts from './pages/posts/index.svelte'
import posts_show from './pages/posts/show.svelte'
/* pages */
import pages_show from './pages/pages/show.svelte'
//
export const routes = {
  '/': index,
  '/posts/': posts,
  '/posts/show/:id': posts_show,
  '/pages/show/:id': pages_show,

}	
</script>

<main>
	<Navi />
	<Router {routes} />
</main>

<style>
</style>
