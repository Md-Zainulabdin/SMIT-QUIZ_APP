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

        console.log('res', res);
    }


    return (
        <div className="w-full h-[100vh] customFlex">
            <div className="w-[70%] h-[700px] shadow-md flex">
                <div className="w-[50%] h-full border-r"></div>
                <div className="w-[50%] h-full px-8 customFlex flex-col gap-8">
                    <div className="w-full text-left">
                        <h1 className="text-4xl font-semibold text-[--primary-color] mb-8">Sign Up</h1>
                        <hr />
                    </div>
                    <div className="form w-full">
                        <Form login={false} onFormSubmit={onSubmithandler} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;