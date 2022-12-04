<script lang="ts">
import {link} from 'svelte-spa-router'
import LibSqlite from '../../lib/LibSqlite';
//import LibPost from '../../lib/LibPost';
import LibPage from '../../lib/LibPage';
import { marked } from 'marked';
//type
type IPostItem = {
  id: number,
  title : string,
  content : string,
  category : string,
  createdAt: string,
}
// Variable
export let params, postItem: IPostItem;

postItem = {id: 0, title: "", content: ""};
console.log(params.id);
/**
* getItem
* @param
*
* @return
*/   
const getItem = async function(id: number) {
  try {   
    const db = await LibSqlite.getDb();
    let post = await LibPage.get(db, id)
console.log(post);
    let content = post.content;
    content = marked.parse(content);
    postItem = {
      id: post.id, title: post.title, content: content,
      category: post.categoryName,
      createdAt: post.createdAt,
    };
  } catch (e) {
    console.error(e);
    alert("error, getItem");
  }
}
/*
* init proc
* @param
*
* @return
*/  
getItem(params.id); 

</script>

<!-- -->
<div class="container post_show_wrap">
  <a href={`/`} use:link>
    <button class="btn btn-outline-primary my-2">Back</button>
  </a>
  <hr />  
  <h3>{postItem.title}</h3>
  {postItem.createdAt}<br />
  ID : {postItem.id}<br />
  <hr />
  <div class="post_item" >{@html postItem.content}
  </div>  
</div>

<style>        
</style>
<!--
 
-->
