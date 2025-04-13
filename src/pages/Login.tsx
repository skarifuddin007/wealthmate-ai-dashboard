
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AuthForm from "@/components/auth/AuthForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 md:py-16 bg-gradient-to-br from-wealth-dark via-wealth-primary/20 to-wealth-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="max-w-md mx-auto text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 gradient-heading">Sign in to WealthMate AI</h1>
            <p className="text-muted-foreground">
              Access your financial dashboard or create a new account to get started.
            </p>
          </div>
          
          <AuthForm />
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              By continuing, you agree to WealthMate's{" "}
              <Link to="#" className="underline hover:text-wealth-primary">Terms of Service</Link>
              {" "}and{" "}
              <Link to="#" className="underline hover:text-wealth-primary">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
