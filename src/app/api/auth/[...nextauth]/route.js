import { getData } from "@/handlers/handler";
import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";

// Authentication options

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",

            async authorize({email, password}) {
                let user = getData();
            }
        })
    ]
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}