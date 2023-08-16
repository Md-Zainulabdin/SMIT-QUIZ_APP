"use client";
import Form from "@/app/components/Form/page";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();

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
      router.replace("/auth/login");
    }

    console.log("res", res);
  };

  return (
    <div className="w-full h-[100vh] customFlex signUpPageBackground relative">
      <div className="overlay absolute w-full h-full backdrop-blur-sm bg-white opacity-50"></div>
      <div className="w-[80%] md:w-[70%] h-[700px] bg-white shadow-md flex border-2 relative z-3">
        <div className="w-[0%] sm:w-[40%] md:w-[50%] h-full border-r">
          <div className="w-full h-full py-8 signUpGradient flex items-end justify-center">
            <img
              src="/smit logo.png"
              alt="Saylani logo"
              className="w-[250px]"
            />
            {/* <h1 className="text-5xl text-center leading-12 text-white font-bold">We Help You To Grow</h1> */}
          </div>
        </div>
        <div className="w-full sm:w-[60%] md:w-[50%] h-full px-8 customFlex flex-col gap-8">
          <div className="w-full text-left">
            <h1 className="text-4xl font-semibold text-[--primary-color] mb-8">
              Sign Up
            </h1>
            <hr />
          </div>
          <div className="form w-ful">
            <Form login={false} onFormSubmit={onSubmithandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
