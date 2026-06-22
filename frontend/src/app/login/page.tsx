"use client"
import React from 'react'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/Dagu_Logo.png'
import Link from 'next/link';
const page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
            <div className="w-full max-w-md rounded-xl bg-white dark:bg-gray-900 p-8 shadow-2xl">
                <div className="mb-5 flex justify-center">
                    <Image src={logo} alt="Logo" width={80} height={40} />
                </div>
                <h1 className="text-center text-base font-semibold text-gray-900 dark:text-white">
  Welcome Back
</h1>
                <p className="mt-1 text-center text-base text-gray-500 dark:text-gray-400">
                    Please login to continue
                </p><br />
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        //   value={form.email}
                        //   onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-3 text-base focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                </div>
                <br />
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        required
                        //   value={form.password}
                        //   onChange={(e) => setForm({ ...form, password: e.target.value })}
                        className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-9 text-base focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                        {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                </div>
                <div className="mt-2 text-right">
                    <Link
                        href="/forgotpassword"
                        className="text-sm text-green-600 hover:underline"
                    >
                        Forgot password?
                    </Link>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-md  mt-2 bg-green-600 py-2 text-base font-semibold cursor-pointer text-white hover:bg-green-800 disabled:bg-gray-400"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </div>
        </div>
    )
}

export default page