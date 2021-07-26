<!-- QuillEditor.svelte -->
<!-- https://github.com/quilljs/quill -->
<script>
  import { onMount, onDestroy } from 'svelte'
  import 'https://unpkg.com/quill'
  export let value = ''
  let refWrap
  let ref
  let quill
  
  // ugly watcher: https://github.com/sveltejs/svelte/issues/2727#issuecomment-491039093
  let _value = value
  // ugly watching..
  $: if (_value !== value) {
    renderValue(value)
  }
  onDestroy(() => {
    refWrap.childNodes.forEach((el) => {
      refWrap.removeChild(el)
    })
  })
  onMount(async () => {
    // quill 세팅
    quill = new window.Quill(ref, {
      theme: 'snow'
    })
    // 초기값 세팅
    renderValue(value, quill)

    quill.on('text-change', () => {
      const el = quill.container.querySelector('.ql-editor')
      if (el) {
        setValue(el.innerHTML)
      }
    })
  })
  function renderValue(v, _quill = quill) {
    _quill.root.innerHTML = v
    _value = v
  }
  function setValue(v) {
    _value = v
    value = v
  }
</script>

<div bind:this={refWrap}>
  <div bind:this={ref}></div>
</div>

<style>
  @import url("https://cdn.quilljs.com/1.3.6/quill.snow.css");
</style>