'use client'
import Form from "@/app/components/Form/page";

const LoginForm = () => {

    const onsubmitHandler = (email, password) => {

    }

    return (
       <Form signIn={true} onFormSubmit={onsubmitHandler}/>
    )
}

export default LoginForm;