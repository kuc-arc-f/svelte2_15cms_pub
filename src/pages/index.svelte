<script lang="ts">
import {link} from 'svelte-spa-router'
import LibSqlite from '../lib/LibSqlite';
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
    const result = await LibSqlite.select(db, "SELECT id, title, content FROM Post;");
    if(result === null) {
      return;
    }
    console.log(result);
    const items: any[] = [];
    result.forEach(function (item: any){
      let row = {id: 0, title: "", content: ""};
      console.log(item);
      if(item.length > 0) {
        row.id = item[0];
        row.title = item[1];
        row.content = item[2];
      }
      items.push(row);
    });
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
  <p>ID : {item.id}
  </p>  
  <hr />
  {/each}
</div>

<style>
</style>