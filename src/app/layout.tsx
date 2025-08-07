import ClientLayout from "@/components/layout/ClientLayout";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinTrack",
  description: "FinTrack is a platform for managing your finances",
  openGraph: {
    title: "FinTrack",
    description: "FinTrack is a platform for managing your finances",
    url: "https://fintrack-rouge.vercel.app/", 
    siteName: "FinTrack",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "FinTrack Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinTrack",
    description: "FinTrack is a platform for managing your finances",
    images: ["/logo.png"],
  },
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
