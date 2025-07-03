import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import {
  Shield,
  Smartphone,
  Bell,
  Wallet,
  Send,
  History,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Badge } from "../components/ui/badge";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const LandingPage = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Fraud Detection",
      description:
        "AI-powered real-time fraud detection to keep your money safe 24/7",
      color: "text-red-500",
    },
    {
      icon: Smartphone,
      title: "Withdrawal Simulation",
      description:
        "Test and simulate withdrawals before making actual transactions",
      color: "text-blue-500",
    },
    {
      icon: Bell,
      title: "Emergency Maintenance Alerts",
      description:
        "Instant notifications about system maintenance and service updates",
      color: "text-yellow-500",
    },
    {
      icon: Wallet,
      title: "Offline Wallet System",
      description: "Continue spending even when the app is under maintenance",
      color: "text-green-500",
    },
    {
      icon: Send,
      title: "Secure Money Transfer",
      description:
        "Send money with email notifications to both sender and receiver",
      color: "text-purple-500",
    },
    {
      icon: History,
      title: "Transaction History",
      description:
        "Complete history of all your transactions at your fingertips",
      color: "text-indigo-500",
    },
  ];

  const benefits = [
    "Bank-grade security encryption",
    "24/7 customer support",
    "Zero hidden fees",
    "Instant transaction processing",
    "Multi-device synchronization",
    "Regulatory compliance",
  ];
  const navigate = useNavigate();

  const boxVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.1 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              HamroBank
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={() => navigate("/login")}
              variant="outline"
              className="hidden sm:inline-flex"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <Badge
              variant="secondary"
              className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200"
            >
              🚀 Advanced Banking Technology
            </Badge>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 py-3 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
            Banking Reimagined for the Digital Age
          </h1>

          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience next-generation banking with AI-powered fraud detection,
            offline capabilities, and seamless money transfers. Your financial
            security is our priority.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => navigate("/login")}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => navigate("/login")}
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-2 hover:bg-slate-50"
            >
              Login to Account
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Nepal Rastra Bank Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              Powerful Features for Modern Banking
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our comprehensive suite of banking tools keeps you in control of
              your finances
            </p>
          </div>

          <motion.div
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                Why Choose HamroBank?
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We combine cutting-edge technology with traditional banking
                values to provide you with the most secure and convenient
                banking experience.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                Learn More About Our Security
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="mb-6 opacity-90">
                  Join thousands of satisfied customers who trust HamroBank with
                  their financial future.
                </p>
                <div className="space-y-3">
                  <Button
                    onClick={() => navigate("/login")}
                    size="lg"
                    variant="secondary"
                    className="w-full py-4 text-lg bg-white !text-black hover:!bg-green-500 hover:!text-white"
                  >
                    Login with Existing Account
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white/10"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Start Your Secure Banking Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the future of banking with our comprehensive security
            features and innovative tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/login")}
              size="lg"
              variant="secondary"
              className="px-8 py-4 text-lg bg-white !text-black hover:!bg-green-500 hover:!text-white"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => navigate("/login")}
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-white text-white hover:bg-white/10"
            >
              Existing Customer Login
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">HamroBank</span>
              </div>
              <p className="text-slate-400">
                Your trusted partner in secure digital banking.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Personal Banking</li>
                <li>Business Banking</li>
                <li>Investment Services</li>
                <li>Loans & Credit</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Security</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Fraud Protection</li>
                <li>Privacy Policy</li>
                <li>Security Center</li>
                <li>Terms of Service</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li>24/7 Help Center</li>
                <li>Contact Us</li>
                <li>Branch Locator</li>
                <li>Mobile App</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} HamroBank. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default LandingPage;
