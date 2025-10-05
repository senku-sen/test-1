import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: {type: String, required: true, unique: true },
}, {Timestamps: true});

export default mongoose.model("Admin", adminSchema)