import Link from "next/link";

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-black text-white'>
      <h2 className='text-4xl font-bold mb-4'>404 - Page Not Found</h2>
      <p className='text-lg mb-6'>Sorry, the page you are looking for does not exist.</p>
      <Link href="/users" className='hover:bg-red-800 text-white font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'>
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;