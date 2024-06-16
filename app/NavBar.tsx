import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 p-5 gap-2">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/admin">Admin</Link>
      <Link href="/users">Users</Link>
      <Link href="/upload">Upload</Link>
    </div>
  );
};

export default NavBar;
