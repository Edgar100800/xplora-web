import React from 'react'
import { getSession, signOut } from "next-auth/react";

export default function UserProfile({ session }) {
  if (!session?.user) return (<p>No user session found.</p>);

  return (
    <div>
      <p>User Profile</p>
      <p>{session.user.name}</p>
      <p>{session.user.email}</p>
      <p>{JSON.stringify(session.user)}</p>
      <button
        type="button"
        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Sign Out
      </button>
    </div>
  );
}

// This is for server-side rendering
export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
