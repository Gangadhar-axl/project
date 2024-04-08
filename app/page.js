import Image from "next/image";
import LoginForm from "./ui/Login";
import ForgetPassword from "./ui/ForgotPassword";
import SignupForm from "./ui/SignUp";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm/>
      </main>
  );
}