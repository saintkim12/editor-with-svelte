<!-- App.svelte -->
<script>
  import QuillEditor from './QuillEditor.svelte'
  // import StackEdit from './StackEdit.svelte'
  let value = `
    <h1>hello</h1>
  `
</script>

<div class="App">
  <QuillEditor bind:value={value} />
  {value}
</div>

<style>
</style>