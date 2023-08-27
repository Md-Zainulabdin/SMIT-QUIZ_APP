'use client'
import Form from "@/app/components/Form/page";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const {replace} = useRouter()

    const onsubmitHandler = async (username, email, password) => {
        const data = await signIn("credentials", { redirect: false, email, password });

        if (data.ok && data.error === null) {
            alert("Sucessfully Login");
            replace('/quizboard')
        }
    }

    return (
        <div className="w-full h-screen customFlex loginPageBackground relative">
            <div className="overlay absolute w-full h-full backdrop-blur-sm"></div>
            <div className="w-full h-full sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[33%] sm:h-[600px] flex flex-col justify-center items-start sm:block bg-white  backdrop-blur-md py-8 px-4 sm:px-8 shadow-md border-2">
                <h1 className="text-4xl font-medium text-[--primary-color]">Login</h1>
                <hr className="my-7"/>
                <Form login={true} onFormSubmit={onsubmitHandler} />
            </div>
        </div>
    )
}

export default LoginForm;