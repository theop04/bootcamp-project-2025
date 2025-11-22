import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Project = {
  title: string;
  description: string;
  image: string;
  image_alt: string;
  link: string;
};


// mongoose schema 
const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  link: { type: String, required: true }
});

// defining the collection and model
const Project = mongoose.models['projects'] ||
    mongoose.model('projects', projectSchema);

export default Project;
