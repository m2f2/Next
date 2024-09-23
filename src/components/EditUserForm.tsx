"use client";
import { useState } from 'react';
import { useRouter } from "next/navigation"; 
import { updateUserById } from '@/lib/service';


const EditUserForm = ({ user}:{user: IUser;}) => {
  const [formData, setFormData] = useState<IUser>(user);
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUserById(user._id, formData); 
      router.push("/users");
  };
  
  const handleCancel = () => {
    router.push("/users");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-black p-4 rounded-lg mb-4">
      <h2 className="text-white mb-2">{user ? "Edit User" : "Add User"}</h2>
      <label htmlFor="name" className="text-white  text-xl font-medium">
          Name
        </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="mb-2 p-2 w-full bg-gray-700 text-green-500 outline-none"
      />
      <label htmlFor="email" className="text-white  text-xl font-medium">
          Email
        </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="mb-2 p-2 w-full bg-gray-700 text-green-500  outline-none"
      />
      <label htmlFor="phone" className="text-white  text-xl font-medium">
          Phone
        </label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="mb-2 p-2 w-full bg-gray-700 text-green-500  outline-none" 
      />
      <label htmlFor="street" className="text-white  text-xl font-medium">
          Street
        </label>
      <input
        type="text"
        name="street"
        value={formData.street}
        onChange={handleChange}
        placeholder="Street"
        className="mb-2 p-2 w-full bg-gray-700 text-green-500  outline-none"
      />
      <label htmlFor="city" className=" text-white  text-xl font-medium">
          City
        </label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
        className="mb-2 p-2 w-full bg-gray-700 text-green-500  outline-none"
      />
      <button 
        type="submit"
        className="hover:bg-green-800 text-white font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded p-2  mr-2"
      >
        Save
      </button>
      <button
        type="button"
        onClick={handleCancel}
        className="hover:bg-red-800 text-white font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded p-2 "
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;

export interface IUser {
  _id: string;
  email: string;
  password?: string;
  name: string;
  city: string;
  street: string;
  phone: string;
}

