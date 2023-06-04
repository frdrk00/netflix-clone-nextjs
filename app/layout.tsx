import './globals.css';

export const metadata = {
  title: 'Netflix',
  description: 'Netflix Clone by frdrk00',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
