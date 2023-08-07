'use client'
import Form from "@/app/components/Form/page";
import { useRouter } from "next/navigation";

const SignUpForm = () => {

    const router = useRouter();

    const onSubmithandler = async (username, email, password) => {
        let res = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                username: username
            })
        });

        if (res.ok) {
            alert("Signup Succesfully");
            router.replace('/auth/login')
        }
    }


    return (
       <Form signIn={false} onFormSubmit={onSubmithandler} />
    )
}

export default SignUpForm;