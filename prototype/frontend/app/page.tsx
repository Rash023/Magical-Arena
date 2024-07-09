"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router=useRouter();
  async function signupHandler(e) {
    e.preventDefault(); // Prevent default form submission
    
    try {
      console.log(password, username);
      const response = await axios.post("http://localhost:3001/auth/signup", {
        username,
        password,
      });

     
      if (response.status === 200) {
        console.log("Signup successful!");
  
        router.push("/home");
      } else {
        //todo: add a toaster for signin  fail
        console.log("Signup failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  }

  async function signinHandler(e) {
    e.preventDefault(); 
    
    try {
      console.log(password, username);
      const response = await axios.post("http://localhost:3001/auth/signin", {
        username,
        password,
      });

     
      if (response.status === 200) {
        console.log("Signin successful!");
       
        router.push("/home");
      } else {
        //todo: add a toaster for signup fail
        console.log("Signup failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  }

  return (
    <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center bg-primary p-8 md:p-12">
        <div className="mx-auto w-full max-w-[420px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
          </div>
          <form className="grid gap-4" onSubmit={signupHandler}>
            <div className="grid gap-2">
              <Label htmlFor="signup-username">Username</Label>
              <Input id="signup-username" required onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="signup-password">Password</Label>
              <Input id="signup-password" type="password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" className="w-full bg-muted">
              Sign up
            </Button>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-center bg-muted p-8 md:p-12">
        <div className="mx-auto w-full max-w-[420px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Sign in to your account</h1>
          </div>
          <form className="grid gap-4" onSubmit={signinHandler}>
            <div className="grid gap-2">
              <Label htmlFor="signin-username">Username</Label>
              <Input id="signin-username" required onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="signin-password">Password</Label>
              <Input id="signin-password" type="password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" className="w-full bg-primary">
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
