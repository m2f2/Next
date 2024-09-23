
import Loader from "@/components/Loader";
import UserList from "@/components/UserList";
import { Suspense } from "react";

const Users = async () => {
  
  return (
    <Suspense fallback={<Loader/>}>
      <UserList/>
    </Suspense>
  );
};

export default Users;

export const revalidate=10

