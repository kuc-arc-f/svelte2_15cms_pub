<script lang="ts">
import {link} from 'svelte-spa-router'
import LibSqlite from '../../lib/LibSqlite';
import LibPost from '../../lib/LibPost';
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
    let post = await LibPost.get(db, id)
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
  Category: {postItem.category}
  <hr />
  <div class="post_item" >{@html postItem.content}
  </div>  
</div>

<style>        
</style>
<!--
  <div id="post_item" >{@html postItem.content}
  </div>  
SELECT id, title, content from Post WHERE
id = ${id}; 

const sql = `
select
Post.id ,
Post.title,
Post.content,
Post.createdAt,
Category.name
from Post
LEFT OUTER JOIN Category
ON Post.CategoryId = Category.id
WHERE 
Post.id = ${id};
`;
let item = await LibSqlite.select(db, sql);
item = item[0];
console.log(item);   
-->
