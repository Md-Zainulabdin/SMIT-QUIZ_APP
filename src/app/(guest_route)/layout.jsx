import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Layout({children}) {
    let session = await getServerSession(authOptions);
    if (session?.user) redirect('/profile');

    return <>{children}</>
}