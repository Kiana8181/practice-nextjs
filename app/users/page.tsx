import React from "react";
import UserList from "./UserList";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <UserList sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
