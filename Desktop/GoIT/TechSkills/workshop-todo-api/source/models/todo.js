// Instruments
import { todo } from '../odm';

export class Todo {
    constructor(data) {
        this.data = data;
    }

    //method-helper
    _formatTodo(todo) {
        return {
            id:        todo._id,
            message:   todo.message,
            favorite:  todo.favorite,
            completed: todo.completed,
            created:   todo.created,
        };
    }

    async read() {
        const source = await todo
            .find({})
            .sort({ created: -1 })
            .lean();

        const data = source.map(this._formatTodo);

        return data;
    }

    async create() {
        const source = await todo.create(this.data);
        const data = this._formatTodo(source);

        return data;
    }

    async update(id) {
        const update = {};

        if (this.data.hasOwnProperty('message')) {
            update.message = this.data.message;
        }

        if (this.data.hasOwnProperty('favorite')) {
            update.favorite = this.data.favorite;
        }

        if (this.data.hasOwnProperty('completed')) {
            update.completed = this.data.completed;
        }

        const source = await todo
            .findByIdAndUpdate(id, update, { new: true })
            .lean();

        if (!source) {
            throw new Error(`todo with id '${id}' not found`);
        }

        const data = this._formatTodo(source);

        return data;
    }

    async remove(id) {
        const source = await todo.findByIdAndRemove(id).lean();

        if (!source) {
            throw new Error(`todo with id '${id}' not found`);
        }

        return `todo with id '${id}' deleted`;
    }
}
