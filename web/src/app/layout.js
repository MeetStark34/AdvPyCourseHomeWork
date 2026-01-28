import "./globals.css";

export const metadata = {
  title: "MStrak Coursework OS",
  description: "Interactive Repository Viewer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}