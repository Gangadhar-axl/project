
import clientPromise from "@/lib/dbConfig";
import { NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("jayakrishna");
    const reqBody = await request.json();
    const { email, password } = reqBody;
    //check if user already exists
    // const user = await db.collection("users").findOne({ email });
    // console.log(user);
    // if (user) {
    //   return NextResponse.json(
        // { error: "User already exists" },
        // { status: 400 }
    //   );
    // }

    //hash password
    // const salt = await bcryptjs.genSalt(10);
    // const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = {
      email,
      password,
    };
    const savedUser = db.collection("details").insertOne(newUser);

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}