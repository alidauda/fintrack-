import ClientLayout from "@/components/layout/ClientLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinTrack",
  description: "FinTrack is a platform for managing your finances",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
