import mongoose, { Schema } from "mongoose";

function validatePhone(phone) {
  // Check if phone is a string and has a length of 10
  if (typeof phone !== 'string' || phone.length !== 10) {
    return false;
  }

  // Check if all characters are digits (0-9)
  return phone.split('').every(char => /\d/.test(char));
}

const contactSchema = new Schema({
  firstName: {
    type: String,
    //required: [true, "First Name is Required"],
  },

  lastName: {
    type: String,
    //required: [true, "Last Name is Required"],
  },

  email: {
    type: String,
    required: [true, "Please Check and Provide your correct email"],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  countryCode: {
    type: String,
    //required: [true, "Country Code is Required"],
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
    //required: [true, "Company Name is Required"],
  },

  companySize: {
    type: String,
    //required: [true, "Company Size is Required"],
  },

  option: {
    type: String,
    // Remove required property if not needed on client-side
  },

  category: {
    type: String,
    // Remove required property if not needed on client-side
  },

  subcategory: {
    type: String,
    validate: {
      validator: function (subcategory) {
        // Adjust condition based on your client-side validation
        return !this.category ||
          (this.category !== "Product" && this.category !== "Service") ||
          subcategory;
      },
      message: "Subcategory is required for selected category"
    }
  },

  otherOption: {
    type: String,
    validate: {
      validator: function (otherOption) {
        // Adjust condition based on your client-side validation
        return !this.category || this.category !== "Other" || otherOption;
      },
      message: "Other option is required for selected category"
    }
  },

  message: {
    type: String,
    validate: {
      validator: function (message) {
        // Adjust condition based on your client-side validation
        return !this.category || this.category !== "Other" ||
          (message && message.trim().split(/\s+/).length >= 4);
      },
      message: "Minimum 4 words are required in the text box"
    }
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
