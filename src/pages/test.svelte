<script lang="ts">
/* svelte, component sample */
import ChildBox from './test/ChildBox.svelte';

//
const parentFunc = function(num: number) {
  console.log("parentFunc", num);
}
</script>

<!-- MarkUp -->
<div class="container">
  <h2>test</h2>  
  <hr />
  <ChildBox  parentFunc={parentFunc} />
</div>
