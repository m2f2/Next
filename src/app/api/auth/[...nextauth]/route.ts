import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export { handler as GET, handler as POST }; 

const handler = NextAuth(authOptions);