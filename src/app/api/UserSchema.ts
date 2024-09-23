import { z } from 'zod';

const UserSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  name: z.string().min(3, "Name is required"),
  city: z.string().min(3, "City is required"),
  street: z.string().min(3, "Street is required"),
  phone: z.string().min(10, "Phone number must be at least 10 characters long"),
  image: z.string().optional(), 
});

export default UserSchema