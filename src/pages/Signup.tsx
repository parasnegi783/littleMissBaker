import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { HeartIcon, FloatingHearts } from "../components/Decorations";

export default function Signup() {
  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [method, setMethod] = useState<"email" | "mobile">("email");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [otpStep, setOtpStep] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(0);

  const handleGoogleSignup = () => {
    login({ name: "Sweet User", email: "sweet@gmail.com", initial: "S" });
    showToast("Welcome to the family! 🎉");
    navigate("/");
  };

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      showToast("Please enter your name", "error");
      return;
    }
    if (!email.includes("@")) {
      showToast("Please enter a valid email", "error");
      return;
    }
    if (password.length < 6) {
      showToast("Password must be at least 6 characters", "error");
      return;
    }
    if (!agreeTerms) {
      showToast("Please agree to the terms & conditions", "error");
      return;
    }
    login({ name, email, initial: name[0].toUpperCase() });
    showToast(`Welcome, ${name}! 🎉`);
    navigate("/");
  };

  const handleSendOTP = () => {
    if (phone.length < 7) {
      showToast("Please enter a valid phone number", "error");
      return;
    }
    setOtpStep(true);
    setResendTimer(30);
    showToast("OTP sent to your phone! 📱");
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleVerifyOTP = () => {
    const code = otp.join("");
    if (code.length !== 6) {
      showToast("Please enter the full 6-digit code", "error");
      return;
    }
    login({
      name: "Sweet User",
      email: `${countryCode}${phone}@phone.user`,
      initial: "S",
    });
    showToast("Welcome to Little Miss Baker! 🎉");
    navigate("/");
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Back to home */}
      <Link
        to="/"
        className="fixed top-4 left-4 z-50 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-pink-200 flex items-center justify-center hover:bg-white transition-colors shadow-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-[#6E4C3B]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </Link>

      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#DC8B92] to-[#B95A66] relative items-center justify-center p-12">
        <FloatingHearts />
        <div className="relative text-center text-white max-w-md">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-8 border-2 border-white/30">
            <span className="text-4xl">🧁</span>
          </div>
          <p className="font-[Great_Vibes] text-3xl mb-3 text-white/90">
            Join our sweet family!
          </p>
          <h2 className="text-3xl font-bold font-[Playfair_Display] mb-4">
            Little Miss Baker
          </h2>
          <p className="text-white/70 mb-8 font-[Quicksand] leading-relaxed">
            Create an account to order your favorite treats, track deliveries,
            and unlock member-only perks.
          </p>
          <div className="space-y-4 text-left">
            {[
              "15% off your first order",
              "Early access to seasonal specials",
              "Birthday treats on us 🎂",
            ].map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 text-white/80 font-[Quicksand]"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <HeartIcon className="w-4 h-4 text-white" />
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-[#FBF4F0] flex items-center justify-center p-6 sm:p-8 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F9E2DF] to-[#DC8B92] flex items-center justify-center mx-auto mb-3 border-2 border-[#DC8B92]/30">
              <span className="text-2xl">🧁</span>
            </div>
            <h1 className="text-2xl font-bold text-[#6E4C3B] font-[Playfair_Display]">
              Little Miss Baker
            </h1>
          </div>

          <div className="bg-[#FFFBF9] rounded-3xl p-6 sm:p-8 shadow-sm border border-pink-100/50">
            {/* Tab Switcher */}
            <div className="flex bg-[#F9E2DF]/30 rounded-full p-1 mb-6">
              <Link
                to="/login"
                className="flex-1 text-center py-2 rounded-full text-sm font-medium text-[#6E4C3B]/60 hover:text-[#6E4C3B] transition-colors font-[Quicksand]"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="flex-1 text-center py-2 rounded-full text-sm font-medium bg-[#DC8B92] text-white font-[Quicksand]"
              >
                Sign Up
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-[#6E4C3B] mb-1 font-[Playfair_Display]">
              Create Account
            </h2>
            <p className="text-[#6E4C3B]/50 text-sm mb-6 font-[Quicksand]">
              Join our sweet community today
            </p>

            {/* Google Button */}
            <button
              onClick={handleGoogleSignup}
              className="w-full flex items-center justify-center gap-3 py-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:shadow-sm transition-all mb-4 font-[Quicksand] text-sm font-medium text-[#6E4C3B]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-5">
              <div className="flex-1 h-px bg-pink-200" />
              <span className="text-xs text-[#6E4C3B]/40 font-[Quicksand]">
                or continue with
              </span>
              <div className="flex-1 h-px bg-pink-200" />
            </div>

            {/* Method Tabs */}
            <div className="flex gap-2 mb-5">
              <button
                onClick={() => {
                  setMethod("email");
                  setOtpStep(false);
                }}
                className={`flex-1 py-2 rounded-full text-sm font-medium transition-all font-[Quicksand] ${
                  method === "email"
                    ? "bg-[#F9E2DF] text-[#B95A66]"
                    : "text-[#6E4C3B]/50 hover:text-[#6E4C3B]"
                }`}
              >
                📧 Email
              </button>
              <button
                onClick={() => {
                  setMethod("mobile");
                  setOtpStep(false);
                }}
                className={`flex-1 py-2 rounded-full text-sm font-medium transition-all font-[Quicksand] ${
                  method === "mobile"
                    ? "bg-[#F9E2DF] text-[#B95A66]"
                    : "text-[#6E4C3B]/50 hover:text-[#6E4C3B]"
                }`}
              >
                📱 Mobile
              </button>
            </div>

            {/* Email Form */}
            {method === "email" && (
              <form onSubmit={handleEmailSignup} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#6E4C3B]/70 mb-1.5 font-[Quicksand]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-[#DC8B92] focus:ring-2 focus:ring-[#F9E2DF] outline-none transition-all bg-white font-[Quicksand] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#6E4C3B]/70 mb-1.5 font-[Quicksand]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hello@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-[#DC8B92] focus:ring-2 focus:ring-[#F9E2DF] outline-none transition-all bg-white font-[Quicksand] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#6E4C3B]/70 mb-1.5 font-[Quicksand]">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Min 6 characters"
                      className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-[#DC8B92] focus:ring-2 focus:ring-[#F9E2DF] outline-none transition-all bg-white font-[Quicksand] text-sm pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6E4C3B]/40 hover:text-[#6E4C3B]"
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-1 accent-[#DC8B92]"
                  />
                  <span className="text-xs text-[#6E4C3B]/60 font-[Quicksand]">
                    I agree to the{" "}
                    <a href="#" className="text-[#DC8B92]">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#DC8B92]">
                      Privacy Policy
                    </a>
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#DC8B92] hover:bg-[#B95A66] text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-md font-[Quicksand]"
                >
                  Create Account 🎉
                </button>
              </form>
            )}

            {/* Mobile Form */}
            {method === "mobile" && !otpStep && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#6E4C3B]/70 mb-1.5 font-[Quicksand]">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="px-3 py-3 rounded-xl border border-pink-200 focus:border-[#DC8B92] outline-none bg-white font-[Quicksand] text-sm"
                    >
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+61">🇦🇺 +61</option>
                    </select>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter phone number"
                      className="flex-1 px-4 py-3 rounded-xl border border-pink-200 focus:border-[#DC8B92] focus:ring-2 focus:ring-[#F9E2DF] outline-none transition-all bg-white font-[Quicksand] text-sm"
                    />
                  </div>
                </div>
                <button
                  onClick={handleSendOTP}
                  className="w-full py-3 bg-[#DC8B92] hover:bg-[#B95A66] text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-md font-[Quicksand]"
                >
                  Send OTP 📱
                </button>
              </div>
            )}

            {/* OTP Screen */}
            {method === "mobile" && otpStep && (
              <div className="space-y-4">
                <p className="text-sm text-[#6E4C3B]/60 font-[Quicksand]">
                  Enter the 6-digit code sent to{" "}
                  <span className="font-medium text-[#6E4C3B]">
                    {countryCode} {phone}
                  </span>
                </p>
                <div className="flex gap-2 justify-center">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      id={`otp-${i}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      className="w-11 h-12 text-center text-lg font-bold rounded-xl border border-pink-200 focus:border-[#DC8B92] focus:ring-2 focus:ring-[#F9E2DF] outline-none transition-all bg-white font-[Quicksand]"
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm font-[Quicksand]">
                  <button
                    onClick={() => setOtpStep(false)}
                    className="text-[#DC8B92] hover:text-[#B95A66]"
                  >
                    Change number
                  </button>
                  {resendTimer > 0 ? (
                    <span className="text-[#6E4C3B]/40">
                      Resend in {resendTimer}s
                    </span>
                  ) : (
                    <button
                      onClick={handleSendOTP}
                      className="text-[#DC8B92] hover:text-[#B95A66]"
                    >
                      Resend code
                    </button>
                  )}
                </div>
                <button
                  onClick={handleVerifyOTP}
                  className="w-full py-3 bg-[#DC8B92] hover:bg-[#B95A66] text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-md font-[Quicksand]"
                >
                  Verify & Create Account ✓
                </button>
              </div>
            )}

            {/* Switch to login */}
            <p className="text-center text-sm text-[#6E4C3B]/50 mt-6 font-[Quicksand]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#DC8B92] hover:text-[#B95A66] font-medium"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
