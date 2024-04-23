import connectDB from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import ContactForm from "../../models/ContactForm";

// Function to send email using Brevo API
async function sendEmail(data) {
  // Your code to send email using Brevo API
}

export async function POST(req) {
  const { firstName, lastName, email, countryCode, phone, companyName, companySize, option } =
    await req.json();

  try {
    // Connect to MongoDB
    await connectDB();

    // Save form data to MongoDB
    await ContactForm.create({
      fullname : firstName + lastName,
      email,
      //phone: countryCode + phone, // Concatenate countryCode and phone
      phone,
      companyName,
      companySize,
      radioOption: option, // Assuming 'option' is equivalent to 'radioOption'
    });

    return NextResponse.json({
      msg: ["Thank you for Sharing the Information!"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      console.error('Error submitting form:', error);
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}