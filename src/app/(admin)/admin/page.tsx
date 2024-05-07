import DashboardLayout from "@/lib/feature/admin/DashboardLayout";
import { DashboardTable } from "@/lib/feature/admin/DashboardTable";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardTable />
    </DashboardLayout>
  );
}
