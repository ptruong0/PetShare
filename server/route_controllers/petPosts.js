import express from 'express';

import PetCard from '../models/Pet.js';

export const getAllPets = async(req, res) => {
    try {
        const pets = await PetCard.find();
        res.status(200).json(pets);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

// Create
export const createPet = async(req, res) => {
    const body = req.body;
    const newPost = new PetCard(body);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

export const getPetById = async(req, res, next) => {
    let pet;
    try {
        pet = await PetCard.findById(req.params.id);
        console.log(pet);
        if (pet == null) {
            res.status(404).json({ message: 'Not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    res.pet = pet;
    next();
}

//Read 
export const getAPet = async(req, res) => {

}

// Update
export const updatePet = async(req, res) => {

}

// Delete
export const deletePet = async(req, res) => {
    try {
        await res.pet.remove();
        res.status(200).json(res.pet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}