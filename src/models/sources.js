import { Schema, model } from 'mongoose';

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        set: value => value.toLowerCase()
    },
    description: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        set: value => value.toLowerCase()
    },
    type: {
        type: String,
        enum: ['video', 'document', 'link'],
        required: true
    },
    publicationDate: {
        type: Date,
        default: Date.now
    }
}, 
{
    timestamps: true
});

export default model('Course', courseSchema);
