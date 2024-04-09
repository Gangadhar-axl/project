

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import clientPromise from "@/lib/dbConfig"; // Adjust the path as needed

async function hashPassword(password) {
  const saltRounds = 10; // Number of salt rounds
  return await bcrypt.hash(password, saltRounds);
}

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, phoneNumber, password } = reqBody;

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("jayakrishna");

    // Check if user already exists
    const existingUser = await db.collection("details").findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Insert the new user into the database
    await db.collection("details").insertOne({
      email,
      phoneNumber,
      password: hashedPassword, // Store hashed password in the database
    });

    return NextResponse.json({
      message: "Signup successful",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
