<!-- Quill.svelte -->
<!-- https://github.com/quilljs/quill -->
<script>
  import { onMount } from 'svelte'
  import 'https://unpkg.com/quill'
  export let value = ''
  let ref
  let quill
  
  // ugly watcher: https://github.com/sveltejs/svelte/issues/2727#issuecomment-491039093
  let _value = value
  onMount(async () => {
    // quill 세팅
    quill = new window.Quill(ref, {
      theme: 'snow'
    })
    // 초기값 세팅
    renderValue(value, quill)

    quill.on('text-change', (...arg) => {
      const el = quill.container.querySelector('.ql-editor')
      if (el) {
        setValue(el.innerHTML)
      }
    })
  })
  $: if (_value !== value) {
    console.log('value changed?', value)
    renderValue(value)
  }
  function renderValue(v, _quill = quill) {
    _quill.root.innerHTML = v
    _value = v
  }
  function setValue(v) {
    _value = v
    value = v
  }
</script>

<div bind:this={ref}>
</div>

<style>
  @import url("https://cdn.quilljs.com/1.3.6/quill.snow.css");
</style>