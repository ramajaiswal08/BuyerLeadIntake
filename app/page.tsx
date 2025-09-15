import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Users,
  FileText,
  BarChart3,
  Shield,
  Zap,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Lead Management",
    desc: "Capture, organize, and track all your buyer leads.",
  },
  {
    icon: FileText,
    title: "CSV Import/Export",
    desc: "Import and export leads for analysis quickly.",
  },
  {
    icon: BarChart3,
    title: "Advanced Filtering",
    desc: "Filter leads by location, budget, and type.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    desc: "Enterprise-grade security to protect your data.",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    desc: "Track lead status changes instantly.",
  },
  {
    icon: Building2,
    title: "Property Focused",
    desc: "Designed specifically for real estate pros.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Buyer Lead CRM</h1>
          </div>
          <nav className="space-x-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-medium"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Side - Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Take Full Control of Your Real Estate Leads
            </h2>
            <p className="text-gray-700 text-lg mb-10 max-w-lg">
              Manage, track, and convert leads effortlessly. Our CRM is designed
              for real estate professionals who want efficiency and control.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <Link href="/register">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 px-6 py-3 hover:bg-blue-50"
                >
                  Demo Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - Dashboard Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/images/Dashboard.png"
              alt="Dashboard Mockup"
              className="w-full max-w-2xl rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Stats / Highlights Section
      <section className="py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-700 mt-2">Leads Managed</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-blue-600">50+</h3>
            <p className="text-gray-700 mt-2">Properties Listed</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-blue-600">99%</h3>
            <p className="text-gray-700 mt-2">Client Satisfaction</p>
          </div>
        </div>
      </section> */}

      {/* Features Section - Alternating Layout */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-6 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <feature.icon className="h-16 w-16 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-700 text-base">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2024 Buyer Lead CRM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
