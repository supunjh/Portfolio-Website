import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supun Jayasuriya | Software Engineer",
  description:
    "Portfolio of Supun Jayasuriya — Performance-driven Software Engineer with 3+ years of experience in Angular, Spring Boot, and AWS cloud environments. Building scalable full-stack applications.",
  keywords: [
    "Supun Jayasuriya",
    "Software Engineer",
    "Full Stack Developer",
    "Angular",
    "Spring Boot",
    "AWS",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Supun Jayasuriya" }],
  openGraph: {
    title: "Supun Jayasuriya | Software Engineer",
    description:
      "Performance-driven Software Engineer building scalable full-stack applications with Angular, Spring Boot, and AWS.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
