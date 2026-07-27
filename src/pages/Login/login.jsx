import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/ui/AuthLayout";
import Card from "../../components/ui/Card";
import Logo from "../../components/ui/Logo";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import { login as loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    try {
      const data = await loginUser({
        email,
        password,
      });

      await login(data.access_token);

      navigate("/");
    } catch (err) {
      console.error(err);

      if (err.response) {
        setError(err.response.data.detail);
      } else if (err.request) {
        setError("No response received from the server.");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <AuthLayout>
      <Card>
        <div className="space-y-10">

          {/* Mobile Logo */}

          <div className="lg:hidden">
            <Logo />
          </div>

          {/* Heading */}

          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-[#22262A]">
              Welcome back
            </h1>

            <p className="text-[#6F757B]">
              Sign in to continue managing your links.
            </p>
          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <Input
              label="Email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <Button type="submit">
              Continue
            </Button>
          </form>

          {/* Footer */}

<div className="text-center text-sm">
  <span className="text-[#6F757B]">
    Don't have an account?{" "}
  </span>

  <Link
    to="/signup"
    className="font-medium text-[#639922] hover:underline"
  >
    Create account
  </Link>
</div>

        </div>
      </Card>
    </AuthLayout>
  );
}

export default Login;