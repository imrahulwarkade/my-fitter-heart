import "./globals.css";

export const metadata = {
  title: "Hartring",
  description:
    "FITTR's new FITTR HART Smart Ring tells you everything! ✔ Heart Rate Variability Tracker ✔ Sleep Tracker ✔ Activity Tracker ✔ Recovery Monitor and more. Order the HART Ring online today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
