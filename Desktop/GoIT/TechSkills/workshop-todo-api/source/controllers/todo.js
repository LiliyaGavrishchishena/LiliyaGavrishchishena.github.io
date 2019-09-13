import { Todo as TodoModel } from '../models';

export class Todo {
    constructor(data) {
        this.models = {
            todo: new TodoModel(data),
        };
    }

    async read() {
        const data = await this.models.todo.read();

        return data;
    }

    async create() {
        const data = await this.models.todo.create();

        return data;
    }

    async update(id) {
        const data = await this.models.todo.update(id);

        return data;
    }

    async remove(id) {
        const data = await this.models.todo.remove(id);

        return data;
    }
}
