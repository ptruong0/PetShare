// https://localhosts/posts/...
import express from 'express';

import { getAllPets, createPet, deletePet, getPetById } from '../route_controllers/petPosts.js';

const router = express.Router();

router.get('/', getAllPets);
router.post('/', createPet);
router.delete('/:id', getPetById, deletePet);
// router.put('/:id', getPetById, updatePet);

export default router;