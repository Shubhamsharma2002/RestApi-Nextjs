import User from "@/libs/Models/User";
import connectDB from "@/libs/Mongodb"
import { request } from "http";
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


export const POST = async(request:Request) =>{
     try {
          const body = await request.json();
          await connectDB();
          const newUser = new User({
               name:body.name,
               email:body.email,
               password:body.password
          })

          await newUser.save();
          return new NextResponse(JSON.stringify({message:"User Created done ::)", user:newUser}),{status:200})
     } catch (error:any) {
          return new NextResponse("Error in facting the user" + error.message,{status:500})
     }
}

export const PATCH = async(request:Request) =>{
    try {
          const {id,newName,newPassword} = await request.json();
          await connectDB();
          
     //     const updatedUser = await User.findByIdAndUpdate({
     //           {name:newName},
     //           {password:newPassword}
     //     )}
         
    } catch (error:any) {
     
    }
}

export const DELETE = () =>{
     return new NextResponse("api setup is working now")
}