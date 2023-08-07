'use client'
import Form from "@/app/components/Form/page";
import { signIn } from 'next-auth/react'

const LoginForm = () => {

    const onsubmitHandler = async (username, email, password) => {
        const data = await signIn("credentials", { redirect: false, email, password });

        if (data.ok && data.error === null) {
            alert("Sucessfully Login")
        }
    }

    return (
        <div className="w-full h-[100vh] customFlex">
            <div className="w-[33%] h-[600px] p-8 shadow-md">
                <h1 className="text-4xl font-medium text-[--primary-color]">Login</h1>
                <hr className="my-7"/>
                <Form login={true} onFormSubmit={onsubmitHandler} />
            </div>
        </div>
    )
}

export default LoginForm;