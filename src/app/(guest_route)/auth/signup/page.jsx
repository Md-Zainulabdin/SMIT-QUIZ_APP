"use client";
import Form from "@/app/components/Form/page";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const { replace } = useRouter();

  const onSubmithandler = async (username, email, password) => {
    let res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
      }),
    });

    if (res.ok) {
      alert("Signup Succesfully");
      replace("/auth/login");
    }

    console.log("res", res);
  };

  return (
    <div className="w-full h-screen customFlex signUpPageBackground relative">
      <div className="w-[0%] md:w-[50%] h-full">
        <div className="imgBox w-full h-full py-8 flex justify-center items-end">
          <img src="/smit logo.png" alt="Saylani logo" className="w-[250px]" />
        </div>
      </div>
      <div className="w-full md:w-[50%] h-full flex flex-col justify-center items-center sm:block bg-white  backdrop-blur-md py-8 px-4 sm:px-8 shadow-md border-2">
        <div className="w-full md:w-[90%] h-full flex flex-col items-start justify-center">
          <h1 className="text-4xl font-medium text-[--primary-color]">
            Sign Up
          </h1>
          <hr className="my-7" />
          <Form login={false} onFormSubmit={onSubmithandler} />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
