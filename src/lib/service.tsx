import { IUser } from "@/components/EditUserForm";
import axios from "axios";

const API_URL = "http://localhost:3000/api/users"; 

export async function getAllUsers() {
  try {
      const response = await axios.get(API_URL);
      return { users: response.data.data }; 
  } catch (error) {
      console.error("Error fetching users:", error);
      return { users: [] }; 
  }
}
export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    if (response.status === 200) {
      return { user: response.data }; 
    } else {
      console.error("Error fetching user:", response.status);
      return { user: null }; 
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return { user: null }; 
  }
};

export async function updateUserById(userId: string, updatedUserData: IUser) {
  try {
    const response = await axios.put(`${API_URL}/${userId}`, updatedUserData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.data; 
    } else {
      throw new Error(`Failed to update user: ${response.status}`);
    }

  } catch (error) {
    console.error("Error updating user:", error);
    throw error; 
  }
}