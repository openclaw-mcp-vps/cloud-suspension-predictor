import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloud Suspension Predictor — Stop Account Suspensions Before They Happen",
  description: "Monitor cloud account health metrics and billing patterns to predict AWS, GCP, and Azure suspension risks before they occur."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="17243b21-cebc-4647-9c29-000b8a2c5a4c"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
