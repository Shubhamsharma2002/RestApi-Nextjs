import User from "@/libs/Models/User";
import connectDB from "@/libs/Mongodb"
import { NextResponse } from "next/server"

export const GET = async() =>{
        try {
             await connectDB();
             const users = await User.find();
             return new NextResponse(JSON.stringify(users),{status:200})
        } catch (error:any) {
          return new NextResponse("Error in facting the user" + error.message,{status:500})
        }
}


export const POST = () =>{
     return new NextResponse("api setup is working now")
}

export const PUT = () =>{
     return new NextResponse("api setup is working now")
}

export const DELETE = () =>{
     return new NextResponse("api setup is working now")
}