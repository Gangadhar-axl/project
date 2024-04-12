import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/dbConfig"; // Adjust the path as needed

export async function insertData(request) {
  try {
    const reqBody = await request.json();
    const { searchPattern, regexPattern } = reqBody;

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("jayakrishna"); // Change to your actual MongoDB database name

    // Insert the data into the database
    await db.collection("details").insertOne({
      searchPattern,
      regexPattern,
    });

    return NextResponse.json({
      message: "Data inserted into MongoDB successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
