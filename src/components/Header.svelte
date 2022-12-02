<script>
	import {link} from 'svelte-spa-router'
</script>

<header class="">
  <div class="container">
    <span class="">
    App1
    </span>
    <span><a href="/" use:link>Home</a>
    </span>
    <span><a href="/tasks/" use:link>Tasks</a>
    </span>
    <!--
    <span>
      <a href="/test" use:link>test </a>
    </span>
    -->
  </div>
  <hr />
</header>