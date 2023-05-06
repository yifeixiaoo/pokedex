import { Inter } from "next/font/google";
import SearchBar from "./components/searchBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-10 ${inter.className}`}
    >
      <SearchBar />
    </main>
  );
}
