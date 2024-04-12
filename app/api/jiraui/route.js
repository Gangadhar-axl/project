import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/dbConfig"; // Adjust the path as needed


export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { summary, type, executionId } = reqBody;


    const currentDateUTC = new Date();
    const ISTOffset = 330; // IST is UTC + 5:30 hours
    const ISTTime = new Date(currentDateUTC.getTime() + (ISTOffset * 60000));

    const createdAtISO = ISTTime.toISOString();
    
// Remove the milliseconds part
    const createdAt = createdAtISO.replace(/\.\d+Z$/, "Z");

   

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("jayakrishna");

    // Insert the new user into the database
    await db.collection("create_issue_details").insertOne({
      summary,
      type,
      executionId, 
      createdAt,
    });

    return NextResponse.json({
      message: "Signup successful",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
