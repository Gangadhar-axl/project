// import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";
// import clientPromise from "@/lib/dbConfig"; // Adjust the path as needed


// export async function POST(request) {
//   try {
//     const reqBody = await request.json();
//     const { email, password } = reqBody;

//     // Connect to MongoDB
//     const client = await clientPromise;
//     const db = client.db("jayakrishna");

//     // Check if user exists
//     const user = await db.collection("details").findOne({ email });
//     if (!user) {
//       return NextResponse.json({ error: "User does not exist" }, { status: 400 });
//     }

//     //Check if password is correct (without bcrypt)
//     if (password !== user.password) {
//       return NextResponse.json({ error: "Invalid password" }, { status: 400 });
//     }
//     // const passwordMatch = await bcrypt.compare(password, user.password);
//     // if (!passwordMatch) {
//     //   return NextResponse.json({ error: "Invalid password" }, { status: 400 });
//     // }

//     return NextResponse.json({
//       message: "Login successful",
//       success: true,
//     });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import clientPromise from "@/lib/dbConfig"; // Adjust the path as needed

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("jayakrishna");

    // Check if user exists
    const user = await db.collection("details").findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User does not exist" }, { status: 400 });
    }

    // Check if password is correct
    const passwordMatch = await bcryptjs.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    return NextResponse.json({
      message: "Login successful",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
