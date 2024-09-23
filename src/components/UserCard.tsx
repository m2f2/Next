import { IUser } from "@/lib/models/User";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const UserCard = ({ user, onDelete }: { user: IUser; onDelete: (id: string) => void }) => {
  
  const handleDelete =  () => {
    if (user._id) {
      const confirmDelete = confirm(`Are you sure you want to delete ${user.name}?`);
      if (confirmDelete) {
        onDelete(user._id);
      }
    }
  };

  return (
    <div className="bg-black rounded-2xl p-4 flex-1 min-w-[350px]">
      <div className="flex flex-col justify-center">
        <div className="flex justify-between">
          <Link href={`/users/edit/${user._id}`}>
            <FaEdit className="text-emerald-500 hover:text-cyan-500" />
          </Link>

          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-400"
          >
            <MdDelete />
          </button>
        </div>
        <h1 className="text-xl font-semibold text-white text-center mb-1">
          {user.name}
        </h1>
        <p className="text-sm text-gray-400">
          <span className="text-white">Email: </span>
          {user.email}
        </p>
        <p className="text-sm text-gray-400">
          <span className="text-white">Phone: </span>
          {user.phone}
        </p>
        <div className="mt-2 text-sm text-gray-400">
          <p>
            <span className="text-white">Street: </span> {user.street}
          </p>
          <p>
            <span className="text-white">City: </span> {user.city}
          </p>
          <Link href={`/users/${user._id}`} className="flex justify-center">
            <button className="hover:bg-red-800 text-white font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;