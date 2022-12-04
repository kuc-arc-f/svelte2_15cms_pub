<script lang="ts">
import {link} from 'svelte-spa-router'
import TopHeadBox from '../components/TopHeadBox.svelte';
import IndexRow from './posts/IndexRow.svelte';
import LibSqlite from '../lib/LibSqlite';
import LibPost from '../lib/LibPost';
import LibPage from '../lib/LibPage';
import LibCategory from '../lib/LibCategory';
import LibCommon from '../lib/LibCommon';
import Config from '../config'
const config = Config.get_config()
// Variable
export let postItems: Array<any> = [],
categoryItems: Array<any> = [],
pageItems: Array<any> = [];

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
    //pages
    const pages = await LibPage.getList(db);
    //category
    const category = await LibCategory.getList(db);
    pageItems = pages;
    categoryItems = category;
console.log(categoryItems);
  } catch (e) {
    console.error(e);
    alert("error, getList");
  }
} 
/**
* dispCategory
* @param
*
* @return
*/ 
const dispCategory = async function (id: number) {
  try {   
//console.log("#id=", id);
    const db = await LibSqlite.getDb();
    let items: any[] = [];
    items = await LibPost.getCatgoryItems(db, id);
    items = LibCommon.getDatetimeArray(items);
//console.log(items);
    postItems = items;
  } catch (e) {
    console.error(e);
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

<!-- MarkUp -->
<div class="body_main_wrap">
  <TopHeadBox site_name={config.MY_SITE_NAME} info_text={config.MY_SITE_INFO} />
  <div class="container">
    <div class="btn_disp_ara_wrap mt-0">
      <div class="card shadow-sm my-2">
        <h5 class="card-header myblog_color_accent">Pages</h5>
        <div class="card-body">
          {#each pageItems as item}
          <a class="btn btn-outline-dark  mx-1 mb-2" 
          href={`/pages/show/${item.id}`}  use:link>{item.title}
          </a>
          {/each}          
        </div>
      </div>
      <!-- category -->
      <div class="card shadow-sm my-2">
        <h5 class="card-header myblog_color_accent">Category</h5>
        <div class="card-body">
          {#each categoryItems as item}
          <button class="btn btn-outline-dark  mx-1 mb-2" 
          on:click={dispCategory(item.id)} >{item.name}
          </button>
          {/each}          
        </div>
      </div>
    </div><!-- btn_disp_ara_wrap_end -->
    <h3 class="my-2">Posts</h3>   
    <div class="body_wrap card shadow-sm mb-4">
      <div id="post_items_box" class="card-body mt-2 mb-4">
        {#each postItems as item}
        <IndexRow id={item.id}  title={item.title} 
        date={item.dt_str} category={item.categoryName}  />        
        {/each}
      </div><!-- post_items_box_end -->
    </div><!-- body_wrap_end -->
  </div>
 </div>

<style>
</style>

<!--
  target="_blank"
-->
