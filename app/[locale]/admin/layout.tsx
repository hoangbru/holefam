import { ReactNode } from "react";
import Header from "./_components/header";

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
