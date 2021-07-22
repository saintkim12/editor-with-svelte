<!-- https://editorjs.io/ -->
<script>
  import { onMount } from 'svelte'
  import EditorJS from '@editorjs/editorjs'
  let ref
  onMount(() => {
    const editor = new EditorJS({
      holder: ref
    })
    console.log('editor', editor)
    // 값을 입력데이터와 최대한 가깝게 보이게 하는 기능이 직관적으로는 없는듯?
  })
</script>

<div bind:this={ref} />
