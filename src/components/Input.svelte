<script lang="ts">
    import tasks from "../stores/tasks.svelte"

    let name = $state("")

   function onsubmit(ev: Event) {
        ev.preventDefault()
        tasks.create(name)
        name = ""
   }
</script>

<form {onsubmit}>
    <input type="text" class="w-full px-5 py-2.5 rounded mb-5" placeholder="Enter your task" bind:value={name} />
</form>