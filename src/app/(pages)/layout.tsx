import { Navbar } from "@/components/ui/header/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-full">
      <Navbar />
      {children}
    </section>
  );
}
