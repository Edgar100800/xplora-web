import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/db";
import bcrypt from "bcrypt";

const AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Missing credentials");
        }

        const { email, password } = credentials;

        // Verificar si el usuario existe en la base de datos
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          throw new Error("No user found");
        }

        // Verificar la contraseña
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
          throw new Error("Invalid password");
        }

        // Si todo es correcto, retornar el usuario
        return {
          id: user.id,
          username: user.username,
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  // Additional options like callbacks, etc., can go here
};

const handler = NextAuth(AuthOptions);
export { handler as GET, handler as POST };
