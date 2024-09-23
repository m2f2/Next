
import { dbConnection } from "@/lib/dbConnect";
import { userModel } from "@/lib/models/User";
import { revalidatePath } from "next/cache";

dbConnection();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const user = await userModel.findById(id);
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
    }
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching user", error }), { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const body = await req.json();

  try {
    const updatedUser = await userModel.findByIdAndUpdate(id, body, { new: true });
    if (!updatedUser) {
      return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
    }
    revalidatePath("/users");
    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error updating user", error }), { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
    }
    revalidatePath("/users");
    return new Response(JSON.stringify({ message: "User deleted successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error deleting user", error }), { status: 500 });
  }
}