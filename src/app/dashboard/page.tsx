import { DashboardStats } from "@/shared/components/DashboardStats";
import { DashboardPackages } from "@/shared/components/DashboardPackages";

export default function DashboardPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      
      <main className="flex-grow">
        <DashboardStats />
        <DashboardPackages />
      </main>
    </div>
  );
}
