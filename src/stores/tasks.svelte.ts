import { nanoid } from 'nanoid'

interface Task {
    id: string
    name: string
    isDone: boolean
}

class Tasks {
    #tasks = $state<Task[]>(JSON.parse(localStorage.getItem('tasks') as string) || [])

    constructor() {
        $effect.root(() => {
            $effect(() => {
                this.#tasks
                this.#updateLocalStorage()
            })
        })
    }

    #updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.#tasks))
    }

    get tasks() {
        return this.#tasks
    }

    create(name: string) {
        this.#tasks.push({ id: nanoid(), name, isDone: false })
    }

    toggleIsDone(id: string) {
        const index = this.#tasks.findIndex((t) => t.id === id)

        if (index !== -1) {
            this.#tasks[index].isDone = !this.#tasks[index].isDone
        }
    }

    delete(id: string) {
        const index = this.#tasks.findIndex((t) => t.id === id)

        if (index !== -1) {
            this.#tasks.splice(index, 1)
        }
    }
}

const tasks = new Tasks()

export default tasks
