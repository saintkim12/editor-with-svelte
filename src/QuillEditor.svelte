<!-- Quill.svelte -->
<!-- https://github.com/quilljs/quill -->
<script>
  import { onMount } from 'svelte'
  import 'https://unpkg.com/quill'
  export let value
  onMount(async () => {
    const selector = '#editor'
    const quill = new window.Quill(selector, {
    // new window.Quill(selector, {
      theme: 'snow'
    })
    quill.on('text-change', (...arg) => {
      const el = quill.container.querySelector('.ql-editor')
      // TODO: update value
      // if (el) value = el.innerHTML
    })
  })
</script>

<div id="editor">
  {@html value}
</div>

<style>
  @import url("https://cdn.quilljs.com/1.3.6/quill.snow.css");
</style>