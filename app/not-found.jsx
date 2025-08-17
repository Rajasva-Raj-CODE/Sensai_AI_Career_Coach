import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center bg-gradient-to-br from-primary via-accent to-secondary">
      {/* Logo */}
      <Link href="/" className="mb-8 mt-10">
        <Image src="/logo.png" alt="AI Career Coach Logo" width={120} height={40} className="mx-auto" />
      </Link>
      {/* 404 Title */}
      <h1 className="text-7xl font-extrabold gradient-title animate-gradient mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4 text-primary-foreground">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
        Sorry, we couldn’t find the page you’re looking for.<br />
        Let’s get you back on track!
      </p>
      <Link href="/">
        <Button size="lg" className="px-8 shadow-lg">Return Home</Button>
      </Link>
    </div>
  );
}