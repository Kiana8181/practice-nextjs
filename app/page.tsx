import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { Metadata } from "next";
import LazyLoading from "./components/LazyLoading";
import { authOptions } from "./api/auth/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <LazyLoading />
      <div className="relative h-screen">
        <Image
          src="https://www.w3schools.com/images/w3schools_green.jpg"
          alt="react course"
          fill
          className="object-cover"
          sizes="(max-width:480px) 100vw,(max-width: 768px) 50vw , 33vw"
          quality={75}
          priority
        />
      </div>
    </main>
  );
}

// const metadata: Metadata = {
//   title: "...",
//   description: "...",
// };

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");

//   return {
//     title: "product.title",
//     description: "product.description",
//   };
// }
