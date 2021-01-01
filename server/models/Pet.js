import mongoose from 'mongoose';

const petCardSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: true
    },
    animalType: {
        type: String,
        required: true
    },
    breed: {
        type: String
    },
    description: {
        type: String
    },
    submittedBy: {
        type: String,
        required: true
    },
    likes: {
        type: Number
    },
    imgSource: {
        type: String,
        //required: true
    },
    postDate: {
        type: Date,
        default: new Date()
    }
});

export default mongoose.model('PetCard', petCardSchema)