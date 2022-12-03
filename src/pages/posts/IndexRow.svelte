<script>
import {link} from 'svelte-spa-router'
//export let save_id , id ,date, title;
export let id ,date, title, category;
</script>
<style>
.card_col_body{ text-align: left; width: 100%;}
.card_col_icon{ font-size: 2.4rem; }
.task_card_box{ width : 95%;}	
</style>
<div class="row justify-content-center">
  <div class="task_card_box card shadow-lg mb-2">
    <div class="card-body">
      <div class="d-flex flex-column flex-md-row">
        <div class="card_col_icon px-md-2 py-2 ">
          <i class="bi bi-clipboard"></i>
        </div>
        <div class="card_col_body  p-md-2">
          <a href={`/posts/show/${id}`} use:link>
            <h3>{title}</h3></a>
            {date} , ID : {id} ,  Category : {category}         
        </div>
        <div class="py-2  py-md-3 px-4 ms-auto text-center">
          <a href={`/posts/show/${id}`} class="btn btn-secondary btnx-cyan" use:link>
          more
          </a>
        </div>
      </div>

    </div>
  </div>
</div> 