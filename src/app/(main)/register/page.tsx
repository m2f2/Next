"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateUserForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    city: "",
    street: "",
    phone: "",
    image: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(user),
      });
      // const data = await res.json();
      if (res.status == 201) {
        router.push('/users');
        setUser({
          name: "",
          email: "",
          city: "",
          street: "",
          phone: "",
          image: "",
          password: "",
        });
        
      } 
      
    } catch (error) {
      console.log(error);
      
    }

  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-6/12 mx-auto">
      <div>
        <label htmlFor="name" className="block text-xl font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="mt-1 block w-full border px-2 py-1 outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xl font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="mt-1 block w-full border px-2 py-1 outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-xl font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="mt-1 block w-full border px-2 py-1 outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="image" className="block text-xl font-medium">
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
          className="mt-1 block w-full border px-2 py-1 outline-none"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-xl font-medium">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          className="mt-1 block w-full border px-2 py-1 outline-none"
        />
      </div>
      <div>
        <label htmlFor="street" className="block text-xl font-medium">
          Street
        </label>
        <input
          type="text"
          id="street"
          name="street"
          value={user.street}
          onChange={handleChange}
          className="mt-1 block w-full border px-2 py-1 outline-none"
        />
      </div>
      <div>
        <label htmlFor="city" className="block text-xl font-medium">
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={user.city}
          onChange={handleChange}
          className="mt-1 block w-full border px-2 py-1 outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-rose-900"
      >
        Create User
      </button>

    </form>
  );
};

export default CreateUserForm;