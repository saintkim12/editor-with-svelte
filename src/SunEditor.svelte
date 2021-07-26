<!-- SunEditor.svelte -->
<!-- https://github.com/JiHong88/SunEditor/blob/master/README.md -->
<script>
  import { onMount } from 'svelte'
  import 'suneditor/dist/css/suneditor.min.css'
  import suneditor from 'suneditor'
  import { ko } from 'suneditor/src/lang'
  export let value = ''
  let ref
  let editor
  // ugly watcher: https://github.com/sveltejs/svelte/issues/2727#issuecomment-491039093
  let _value = value
  // ugly watching..
  $: if (_value !== value) {
    renderValue(value)
  }
  onMount(() => {
    // Editor 세팅
    editor = suneditor.create(ref, {
      width: '100%',
      // height: 'calc(100vh - 63px)',
      height: '500px',
      lang: ko,
    })
    // 초기값 세팅
    renderValue(value, editor)
    
    editor.onChange = (contents, core) => {
      setValue(contents)
    }
  })
  function renderValue(v, _editor = editor) {
    _editor.setContents(v)
    _value = v
  }
  function setValue(v) {
    _value = v
    value = v
  }
</script>

<textarea bind:this={ref}></textarea>
