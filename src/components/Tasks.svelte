<script lang="ts">
    import { IconTrash } from "@tabler/icons-svelte"
    import tasks from "../stores/tasks.svelte"

</script>


<ul class="space-y-3">
    {#if tasks.tasks.length === 0}
        <p class="text-zinc-400 text-center">Add your task first</p>
    {:else}
        {#each tasks.tasks as {id, name, isDone}}
            <li class="flex items-center gap-5">
                <input type="checkbox" class="size-5" bind:checked={isDone} />
                <p class={["text-lg text-zinc-800", isDone && "line-through"]}>{name}</p>
                <button class="ml-auto" onclick={() => tasks.delete(id)}>
                    <IconTrash />
                </button>
            </li>
        {/each}
    {/if}
</ul>