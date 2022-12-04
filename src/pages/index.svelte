<script lang="ts">
import {link} from 'svelte-spa-router'
import TopHeadBox from '../components/TopHeadBox.svelte';
import PagingBox from '../components/PagingBox.svelte';
import IndexRow from './posts/IndexRow.svelte';
import LibSqlite from '../lib/LibSqlite';
import LibPost from '../lib/LibPost';
import LibPage from '../lib/LibPage';
import LibCategory from '../lib/LibCategory';
import LibCommon from '../lib/LibCommon';
import LibPagenate from '../lib/LibPagenate';
import Config from '../config'
const config = Config.get_config()
// Variable
export let postItems: Array<any> = [],
categoryItems: Array<any> = [],
pageItems: Array<any> = [],
searchKey = "", displayPaginate: bool = false, pagePosition: number = 1;

/**
* getList
* @param
*
* @return
*/     
const getList = async function (page: number) {
  try {   
    const db = await LibSqlite.getDb();
    let items: any[] = [];
    items = await LibPost.getList(db, page);
    items = LibCommon.getDatetimeArray(items);
//console.log(items);
    postItems = items;
    //pages
    const pages = await LibPage.getList(db);
    //category
    const category = await LibCategory.getList(db);
    pageItems = pages;
    categoryItems = category;
//console.log(categoryItems);
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
* searchPost
* @param
*
* @return
*/
const searchPost = async function () {
  try {   
    const key = document.querySelector<HTMLInputElement>('#searchKey');
//console.log("key=", key.value);
    const db = await LibSqlite.getDb();
    let items: any[] = [];
    items = await LibPost.getSearchItems(db, key.value);
    items = LibCommon.getDatetimeArray(items);
//console.log(items);
    postItems = items;
  } catch (e) {
    console.error(e);
  }
}
/**
* nextPageDisplay
* @param
*
* @return
*/
const nextPageDisplay = async function () {
  try{
    pagePosition = pagePosition + 1;
//console.log("nextPageDisplay.=", pagePosition);
    getList(pagePosition);
//    const obj = LibPagenate.getPageStart(pagePosition);
//console.log(obj);
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
getList(1);
displayPaginate = true;
//console.log("displayPaginate=", displayPaginate);
</script>

<!-- MarkUp -->
<div class="body_main_wrap">
  <TopHeadBox site_name={config.MY_SITE_NAME} info_text={config.MY_SITE_INFO} />
  <div class="container mb-4">
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
    <!-- serach button -->
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="input, serach key"
       value="" id="searchKey"
       aria-label="Recipient's username" aria-describedby="button-addon2" />
      <button class="btn btn-outline-secondary" type="button" id="button-addon2"
       on:click={searchPost}>Search
      </button>
    </div>    
    <div class="body_wrap card shadow-sm mb-4">
      <div id="post_items_box" class="card-body mt-2 mb-4">
        {#each postItems as item}
        <IndexRow id={item.id}  title={item.title} 
        date={item.dt_str} category={item.categoryName}  />        
        {/each}
      </div><!-- post_items_box_end -->
    </div><!-- body_wrap_end -->
    <PagingBox display={displayPaginate} nextPageDisplay={nextPageDisplay} />
  </div><!-- container_end -->
 </div>

<style>
</style>

<!--
  target="_blank"
-->
