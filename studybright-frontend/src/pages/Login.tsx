
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { login } from "@/state/auth/Action";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/state/store";


// ✅ Move interface here
interface UserData {
  email: string;
  password: string;
}

interface OnLogin {
  onLogin?: () => void;
}

const Login = ({onLogin }: OnLogin) => {
  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData: UserData = { email, password };
  
    try {
      setIsLoading(true);
      await dispatch(login(userData));
      toast.success("Logged in successfully");
      if (onLogin) onLogin(); // optional callback
    } catch (error) {
      toast.error("Signin failed");
    } finally {
      setIsLoading(false);
    }
  };
  
  // 🧠 This will run when Redux user state updates
  useEffect(() => {
    if (user) {
      console.log("USER NAME:", user.name);
      console.log("USER ROLE:", user.role);
  
      if (user.role === "admin") {
        toast.success("Logged in as Admin");
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    }
  }, [user, navigate]);
  


  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 bg-gradient-to-b from-white to-brand-50">
      <div className="w-full max-w-md animate-fade-in">
        <Card className="border-none shadow-lg">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="text-xs text-muted-foreground">
                  Demo: admin@example.com
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="#" className="text-xs text-brand-800 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <div className="text-xs text-muted-foreground">
                  Demo: admin123
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full bg-brand-800 hover:bg-brand-600"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
              <div className="text-sm text-center text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-brand-800 hover:underline">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
