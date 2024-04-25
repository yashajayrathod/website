import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/Contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { firstName, lastName, email, countryCode, phone, companyName, companySize, option, category, subcategory, otherOption, message } =
    await req.json();

  try {
    await connectDB();
    await Contact.create({
      firstname: `${firstName}`,
      lastname: `${lastName}`,
      email,
      countrycode : `${countryCode}`,
      phone: `${phone}`,
      company: {
        name: companyName,
        size: companySize
      },
      role: option,
      category,
      subcategory: subcategory || otherOption,
      message,
    });

    return NextResponse.json({
      msg: ["Thank you for Sharing the Information!"],
      success: true,
    });
  } catch (error) {
    console.log(req);
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}
