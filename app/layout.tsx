import "./globals.css";

import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "NoteLink Pro",
  description:
    "NoteLink Pro is a note taking app for students and professionals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
