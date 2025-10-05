

export const metadata = {
  title: "My App",
  description: "Login and Register App",
};

import './global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
