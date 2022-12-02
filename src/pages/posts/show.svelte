<script lang="ts">
import {link} from 'svelte-spa-router'
import LibSqlite from '../../lib/LibSqlite';
import { marked } from 'marked';
//type
type IPostItem = {
  id: number,
  title : string,
  content : string,
}
// Variable
export let params, postItem: IPostItem;
postItem = {id: 0, title: "", content: ""};

console.log(params.id);
/*
import Dexie from 'dexie';  
import LibTask from '../../lib/LibTask';
const  get_item = async function (db, id){
  let item = await db.tasks.get(parseInt(id) );
  return item
}
const config = new LibTask().get_const()
const db = new Dexie( config.DB_NAME );
db.version(config.DB_VERSION).stores( config.DB_STORE );  
*/
/**
* getItem
* @param
*
* @return
*/   
const getItem = async function(id: number) {
  try {   
    const db = await LibSqlite.getDb();
    const sql = `
    SELECT id, title, content from Post WHERE
    id = ${id};
    `;
    let item = await LibSqlite.select(db, sql);
    item = item[0];
console.log(item);
    if(item.length > 0) {
      let content = item[2];
      if(content === null) {
        return;
      }
      content = marked.parse(content);
//      postItem.id = 0;
      postItem = {id: id, title: item[1], content: content};
//      setPostItem({id: id, title: item[1], content: content});
    }
  } catch (e) {
    console.error(e);
    alert("error, getItem");
  }
}
getItem(params.id); 
/*
* init proc
* @param
*
* @return
*/  

</script>

<!-- -->
<div class="container">
  <a href={`/`} use:link>
    <button class="btn btn-outline-primary">Back</button>
  </a>
  <hr />  
  <h3>{postItem.title}</h3>
  ID : {postItem.id}
  <hr />
  <div id="post_item" >{@html postItem.content}
  </div>  
</div>

<!--
	<h3>Posts - show</h3>
{params.id}
  {#await get_item(db , params.id) }
  <p>Noow Loading.</p>
  {:then item}
    {item.title}
    <p>{item.content}</p>
  {/await}
-->
