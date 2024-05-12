import Review from "../models/reviewModels.js";

export const getReview = async (req, res) => {
    try {
        const user = await Review.find()
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getReviewbyID = async (req, res) => {
    try {
        const user = await Review.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveReview = async (req, res) => {
    const user = new Review(req.body);
    try {
        const insertedUser = await user.save();
        res.status(201).json(insertedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteReview = async (req, res) => {
    try {
        const deleteUser = await Review.deleteOne({_id:req.params.id});
        res.status(200).json(deleteUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}





