import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio | The SJ Development",
  description: "Sanity Studio for the nextjs project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
