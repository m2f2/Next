"use client";
import { IUser } from "@/lib/models/User";
import UserCard from "./UserCard";
import { getAllUsers } from "@/lib/service";
import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { users } = await getAllUsers();
        setUsers(users);
      } catch (err) {
        console.log("Failed to load users");
      }
    };
    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId: string) => {
    try {
      await fetch(`/api/users/${userId}`, { method: "DELETE" });
      console.log(`User ${userId} deleted`);
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  };

  return (
    <div className="flex gap-4 justify-between flex-wrap">
      {users.length > 0 ? (
        users.map((user: IUser) => (
          <UserCard key={user._id} user={user} onDelete={handleDeleteUser} />
        ))
      ) : (
        <p>No users found.</p> 
      )}
    </div>
  );
};

export default UserList;