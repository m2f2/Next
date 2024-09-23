
import EditUserForm from "@/components/EditUserForm";
import { getUserById } from "@/lib/service";


const EditUser = async ({ params }: { params: { userId: string } }) => {
  
  const { userId } = params;
  const { user } = await getUserById(userId); 
  return (
    <div className="p-4 bg-gray-400">
      <h1 className="text-2xl font-bold mb-4 text-center text-red-700">Edit User</h1>
      {user && <EditUserForm user={user} />}
    </div>
  );
};

export default EditUser;