import "@/app/ui/global.css";

import { inter } from "@/app/ui/fonts";

// export const revalidate = 3600 // revalidate at most every hour

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
