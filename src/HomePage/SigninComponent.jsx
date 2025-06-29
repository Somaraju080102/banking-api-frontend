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
import { Link } from "react-router-dom"
import * as Yup from "yup"


export default function SiginComponent() {

  const formik=useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      console.log(values);
      try{
        const response=await axios.post("http://localhost:8080/api/auth/login",values);
        if(response.status===200){
          alert("Signin successful");
          // Redirect to home or dashboard
        }
      } catch (error) {
        console.error("Error during signin:", error);
        alert("Signin failed. Please try again.");
      }
    },
    validationSchema:Yup.object({
      name: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .required('Required'),
    })
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
    <Card className="w-full max-w-sm bg-amber-50">
      <CardHeader>
        <CardTitle>Signin to your account</CardTitle>
        <CardDescription className="text-sm text-black">
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
        <Link to={"/login"}>  <Button variant="link">Login</Button></Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text"
                placeholder="John Doe"
                required
              />
              <small className="text-red-700">{formik.errors.name}</small>
              </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                placeholder="m@example.com"
                required
        
              />
              <small className="text-shadow-orange-500">{formik.errors.email}</small>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                {/* <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a> */}
              </div>
              <Input id="password" onChange={formik.handleChange} value={formik.values.password} type="password" required />
              <small className="text-shadow-orange-500">{formik.errors.password}</small>
            </div>
          </div>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Signin
            </Button>
           
          </CardFooter>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}
