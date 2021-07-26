<!-- App.svelte -->
<script>
  // import QuillEditor from './QuillEditor.svelte'
  // import StackEdit from './StackEdit.svelte'
  // import EditorJS from './EditorJS.svelte'
  import SunEditor from './SunEditor.svelte'
  $: value = ''
</script>

<div class="App">
  <SunEditor bind:value={value} />
  <!-- <EditorJS bind:value={value} /> -->
  <!-- <QuillEditor bind:value={value} /> -->
  <!-- {value} -->
  <!-- <input bind:value={value} /> -->
</div>

<style>
</style>