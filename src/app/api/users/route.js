import { setData } from "@/handlers/handler";
import { NextResponse } from "next/server"

export const POST = async (req) => {
   try {
      let body = await req.json();
      setData(body);
      return NextResponse.json({
         success: true,
         message: "User Created Sucessfully",
         status: 201
      });
   }
   catch (error) {
      console.log(error);
      return NextResponse.error(error);
   }
}