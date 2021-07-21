<script>
  import { onMount } from 'svelte'
  import 'https://unpkg.com/stackedit-js'
  onMount(async () => {
    const el = document.querySelector('textarea')
    const stackedit = new window.Stackedit()
    stackedit.openFile({
      name: 'Filename', // with an optional filename
      content: {
        text: el.value, // and the Markdown content.
      },
    })
    stackedit.on('fileChange', (file) => {
      el.value = file.content.text
    })
  })
</script>

<textarea>aaa</textarea>

<style>
</style>
