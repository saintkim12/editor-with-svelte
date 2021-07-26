<!-- App.svelte -->
<script>
  import QuillEditor from './QuillEditor.svelte'
  import StackEdit from './StackEdit.svelte'
  import EditorJS from './EditorJS.svelte'
  import SunEditor from './SunEditor.svelte'
  export let editorType = 0
  const editorTypeList = [
    'QuillEditor',
    // 'StackEdit', // 보류
    // 'EditorJS', // 데이터 바인딩(setContents)을 위해 추가 라이브러리가 필요 또는 직접 구현해야되서 보류
    'SunEditor',
  ]
  $: value = ''
</script>

<div class="App">
  <header>
    <select bind:value={editorType}>
      {#each editorTypeList as text, idx}
        <option value={idx}>{text}</option>
      {/each}
    </select>
    {editorTypeList[editorType] || ''}
  </header>
  <div>
    {#if editorTypeList[editorType] === 'QuillEditor'}
    <QuillEditor bind:value={value} />
    {/if}
    {#if editorTypeList[editorType] === 'StackEdit'}
    <StackEdit bind:value={value} />
    {/if}
    {#if editorTypeList[editorType] === 'EditorJS'}
    <EditorJS bind:value={value} />
    {/if}
    {#if editorTypeList[editorType] === 'SunEditor'}
    <SunEditor bind:value />
    {/if}
    <!-- {value} -->
    <!-- <input bind:value={value} /> -->
  </div>
</div>

<style>
</style>
