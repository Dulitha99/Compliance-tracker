import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
}, { _id: false });

const contactInfoSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
}, { _id: false });

const companySchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    unique: true,
  },
  industry: {
    type: String,
    required: true,
  },
  location: addressSchema,
  employeesCount: {
    type: Number,
    default: 0,
  },
  establishedDate: {
    type: Date,
    required: true,
  },
  contactInfo: contactInfoSchema,
}, { _id: false });

const adminSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  company: companySchema, // Embed the company schema here
}, {
  timestamps: true,
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
