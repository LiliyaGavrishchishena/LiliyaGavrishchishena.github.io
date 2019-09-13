// Core
import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema(
    {
        message: {
            type:     String,
            required: true,
        },
        favorite: {
            type:    Boolean,
            default: false,
        },
        completed: {
            type:    Boolean,
            default: false,
        },
    },
    { timestamps: { createdAt: 'created', updatedAt: 'modified' } },
);

// Collection
export const todo = mongoose.model('todos', schema);
