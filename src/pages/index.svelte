<script lang="ts">
import {link} from 'svelte-spa-router'
import LibSqlite from '../lib/LibSqlite';
import LibPost from '../lib/LibPost';
import LibCommon from '../lib/LibCommon';
// Variable
export let postItems: Array<any> = [];

/**
* getList
* @param
*
* @return
*/     
const getList = async function getList() {
  try {   
    const db = await LibSqlite.getDb();
    let items: any[] = [];
    items = await LibPost.getList(db);
    items = LibCommon.getDatetimeArray(items);
console.log(items);
    postItems = items;
  } catch (e) {
    console.error(e);
    alert("error, getList");
  }
} 
/**
* start proc
* @param
*
* @return
*/ 
getList();
</script>

<div class="container">
	<h3>Posts - index</h3>
  <hr />
  {#each postItems as item}
  <h3><a href={`/posts/show/${item.id}`} use:link>{item.title}</a>
  </h3>
  <p>{item.dt_str}, ID : {item.id}, Category: {item.categoryName}
  </p>  
  <hr />
  {/each}
</div>

<style>
</style>