export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body>{children}</body>
    </html>
  );
}
