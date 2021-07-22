<!-- App.svelte -->
<script>
  import QuillEditor from './QuillEditor.svelte'
  // import StackEdit from './StackEdit.svelte'
  $: value = ''
</script>

<div class="App">
  <QuillEditor bind:value={value} />
  <!-- {value} -->
  <!-- <input bind:value={value} /> -->
</div>

<style>
</style>