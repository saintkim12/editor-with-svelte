<!-- App.svelte -->
<script>
  // import QuillEditor from './QuillEditor.svelte'
  // import StackEdit from './StackEdit.svelte'
  import EditorJS from './EditorJS.svelte'
  $: value = ''
</script>

<div class="App">
  <EditorJS bind:value={value} />
  <!-- <QuillEditor bind:value={value} /> -->
  <!-- {value} -->
  <!-- <input bind:value={value} /> -->
</div>

<style>
</style>