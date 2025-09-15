import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth/auth";
import { BuyerForm } from "@/components/forms/buyer-form";
import { Sidebar } from "@/components/layout/sidebar";

export default async function NewBuyerPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="rounded-lg bg-gradient-to-r from-indigo-50 to-indigo-100 border border-gray-200 p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">Add New Lead</h1>
          <p className="text-gray-600 mt-1">
            Create and manage a new buyer lead with detailed information.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-lg border bg-white shadow-sm p-6">
          <BuyerForm mode="create" />
        </div>
      </main>
    </div>
  );
}
