import mongoose, { Schema } from 'mongoose';

function validatePhone(phone) {
  // Check if phone is a string and has a length of 10
  if (typeof phone !== 'string' || phone.length !== 10) {
    return false;
  }

  // Check if all characters are digits (0-9)
  return phone.split('').every(char => /\d/.test(char));
}

const contactFormSchema = new Schema({
  firstName: {
    type: String,
    /*trim: true,
    required: [true, "Name is Required"],
    minlength: [2, "Name must be larger than 2 characters"],
    maxlength: [50, "Name must be lesser than 50 characters"],*/
  },
  lastName : {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please Check and Provide your correct email"],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/, "Invalid email address"],
  },
  phone: {
    type: String,
    validate: {
      validator: validatePhone,
      message: "Please enter a valid phone number (10 digits only)"
    }
  },
  companyName: {
    type: String,
    required: [true, "Please Enter the Company name"],
  },
  companySize: {
    type: String,
    required: [true, "Please Enter the Company Size"],
  },
  radioOption: {
    type: String,
    required: [true, "Please select an option"],
  }
});

const ContactForm = mongoose.models.ContactForm || mongoose.model('ContactForm', contactFormSchema);

export default ContactForm;