import { createFileRoute } from "@tanstack/react-router";
import { Book } from "@/components/ebook/Book";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Book />;
}
