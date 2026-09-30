import DashboardLayout from "@/components/layout/DashboardLayout";

export default function PagesLayout({ children }) {
  return (
    <html lang="en" className={"h-full"}>
      <body>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
