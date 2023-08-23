import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import QuizCard from "@/app/components/QuizCard/page";
import Footer from "@/app/components/footer/page";
import Navbar from "@/app/components/navbar/page";
import { utils } from "@/utils/page";
import { getServerSession } from "next-auth";

const QuizDashboard = async () => {

    let session = await getServerSession(authOptions);

    return (
        <div className="w-full">
            <Navbar />
            <div className={`parent ${utils.paddingX} h-full flex flex-col justify-start gap-6`}>
                <div className={`header py-6 border-b`}>
                    <h1 className="text-2xl sm:text-3xl font-medium text-[--primary-color]">Welcome, {session?.user?.name}</h1>
                </div>
                <div className="w-full mt-6">
                    <QuizCard />
                </div>
            </div>
        </div>
    )
}

export default QuizDashboard;