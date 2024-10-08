import Link from "next/link";

export default async function Home() {

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center ">
      {
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-2xl">Please login first</h1>
          <Link href="/login">
            <button
              className="hover:bg-red-800  font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
              aria-label="Login button"
            >
              Login
            </button>
          </Link>
        </div>
      }
    </div>
  );
}