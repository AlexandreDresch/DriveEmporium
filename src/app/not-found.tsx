import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center bg-[#0a0a0a]">
      <h1 className="text-9xl font-extrabold tracking-widest text-white">
        404
      </h1>
      <div className="absolute rotate-12 rounded bg-primary px-2 text-sm">
        Page Not Found
      </div>

      <Button className="relative block px-8 hover:bg-secondary" variant="ghost">
        <Link href="/">
          Go Home
        </Link>
      </Button>
    </main>
  );
}
