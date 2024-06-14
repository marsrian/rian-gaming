import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LoginForm from "@/components/LoginForm";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/");
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;