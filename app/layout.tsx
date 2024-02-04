

import { Metadata } from "next";
import "./globals.css";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <head>
        <title>Coffee</title>
        <meta name='description' content='@advwastaken' />
      </head>
      <body>{children}</body>
    </html>
  );
}
