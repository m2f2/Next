import { dbConnection } from "@/lib/dbConnect";
import { userModel } from "@/lib/models/User";
import UserSchema from "../UserSchema";
import { revalidatePath } from "next/cache";

dbConnection();

export async function GET() {
  try {
    const users = await userModel.find();
    return Response.json({ data: users }, { status: 200 });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ message: errorMessage }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const user = await request.json();

  const validation = UserSchema.safeParse(user);

  if (!validation.success) {
    return new Response(JSON.stringify({ message: validation.error.errors }), {
      status: 400,
    });
  }

  try {
    const newUser = await userModel.create(user);
    revalidatePath('/users');
    return Response.json({ data: newUser }, { status: 201 });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ message: errorMessage }, { status: 500 });
  }
}
