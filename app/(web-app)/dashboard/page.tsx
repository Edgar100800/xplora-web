"use client"
import {signOut} from 'next-auth/react'
import {useRouter} from 'next/navigation'

function DashboardPage() {
  const router = useRouter();

  return (
    <section className="h-full flex justify-center items-center bg-slate-800">
      <div>
        <h1 className="text-white text-5xl">Dashboard</h1>
        <button className="bg-white text-black px-4 py-2 rounded-md mt-4"
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          Logout
        </button>

        <button className="bg-white text-black px-4 py-2 rounded-md mt-4"
          onClick={() => router.push('/dashboard/createstore')}
        >
          Create Store
        </button>
      </div>
    </section>
  )
}
export default DashboardPage