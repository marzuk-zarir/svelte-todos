<script lang="ts">
    import { IconCalendar } from "@tabler/icons-svelte"
    import Input from "./components/Input.svelte"
    import Tasks from "./components/Tasks.svelte"
    import { setTestContext } from "./testContext"

    let foo = "bar"

    setTestContext("hello world")
</script>

<section class="max-w-xl mt-20 mx-auto p-5 bg-zinc-100 rounded">
    <div class="flex items-center gap-2 mb-2">
        <IconCalendar size="25" />
        <h1 class="text-2xl font-bold">To-Do List</h1>
    </div>

    <Input/>
    <Tasks/>
</section>
