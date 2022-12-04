<script>
import {link} from 'svelte-spa-router'
export let id ,date, title, category;
</script>
<style>
.card_col_body{ text-align: left; width: 100%;}
.card_col_icon{ font-size: 2.4rem; }
.task_card_box{ width : 95%;}	
</style>

<!-- MarkUp -->
<span>
  <a class="btn btn-outline-dark  mx-1 mb-2" 
    href={`/pages/show/${id}`} use:link>{title}
  </a>
</span>
<!-- 
target="_blank"
<a className="btn btn-outline-dark  mx-1 mb-2" target="_blank">
-->