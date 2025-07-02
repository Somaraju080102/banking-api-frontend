import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import * as Yup from "yup"

import { useContext } from "react"
import { Context } from "../../ContextSetup/UserContext"; // Adjust the import path as needed


export default function LoginComponent() {

  const navigate=useNavigate();

  const {handlelogin}=useContext(Context);
  
  const {handlelogout}=useContext(Context);


  

  const formik=useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async(values) => {
      console.log(values);

      try{
        const response=await axios.post("http://localhost:8080/api/auth/login", values);
        const token =response.data.token;
        localStorage.setItem("token", token);
        console.log("Login successful:", response.data);
        if(response.status === 200){
          // alert("Login successful");
          // Redirect to home or dashboard
          console.log("Toekn:", token);
          navigate("/bank");
          handlelogin("Somaraju");
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("Login failed. Please try again.");
      }
    },
    validationSchema:Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .required('Required'),
    })
  })
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
    <Card className="w-full max-w-sm bg-amber-50">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
        <Link to={"/signin"}>  <Button variant="link">Sign Up</Button></Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={formik.handleSubmit}> 
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="m@example.com"
                required
              />
              <small className="text-red-700">{formik.errors.email}</small>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" onChange={formik.handleChange} value={formik.values.password} type="password" required />
              <small className="text-red-700">{formik.errors.password}</small>
            </div>
          </div>
           <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        
      </CardFooter>
        </form>
      </CardContent>
     
    </Card>
    </div>
  )
}
