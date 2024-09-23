import { IUser } from "@/lib/models/User";
import { getAllUsers, getUserById } from "@/lib/service";
import { notFound } from "next/navigation";

const User = async ({ params }: { params: { userId: string } }) => {
  const { userId } = params;
  const { user } = await getUserById(userId);

  if (!user) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-black p-6 md:p-10 rounded-lg shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">
          {user.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <p className="text-lg text-white">
              <span className="font-semibold">Username:</span>{" "}
              <span className="text-gray-500">{user.name}</span>
            </p>
            <p className="text-lg text-white">
              <span className="font-semibold ">Email: </span>
              <span className="text-gray-500">{user.email}</span>
            </p>
            <p className="text-lg text-white">
              <span className="font-semibold">Phone: </span>
              <span className="text-gray-500">{user.phone}</span>
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-red-500 mb-2">
              Address
            </h2>
            <p className="text-lg text-white">
              <span className="font-semibold ">Street: </span>
              <span className="text-gray-500">{user.street}</span>
            </p>
            <p className="text-lg text-white">
              <span className="font-semibold ">City: </span>
              <span className="text-gray-500">{user.city}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

export async function generateMetadata({params,}: {params: { userId: string };}) {
  const { user } = await getUserById(params.userId);
  return {
    title: user.name,
  };
}

export async function generateStaticParams() {
  const { users } = await getAllUsers();
  const ids = users.map((user: IUser) => ({
    userId: user._id.toString(),
  }));
  console.log("Generated ids:", ids);
  return ids;
}
