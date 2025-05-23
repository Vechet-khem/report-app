"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();

    function LoginClick() {
        router.push('/dashboard');
    }
    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600 space-y-5">
                <div className="text-center pb-8">
                    <Image src="/RTR-LOGO-FULL.png" alt="RTR Logo" className="mx-auto" width={300} height={300} />
                    <div className="mt-5">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Login Your Account</h3>
                    </div>
                </div>
                <form
                    className="space-y-5"
                >
                    <div>
                        <label className="font-medium">
                            Username
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-x-3">
                            <input type="checkbox" id="remember-me-checkbox" className="checkbox-item peer hidden" />
                            <label
                                htmlFor="remember-me-checkbox"
                                className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                            >
                            </label>
                            <span>Remember me</span>
                        </div>
                        <a href="javascript:void(0)" className="text-center text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                    <button
                        onClick={LoginClick}
                        type="button"
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Sign in
                    </button>
                </form>

                <p className="text-center">
                    <span>Dont have an account?</span>
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        <span>Sign up</span>
                    </a>
                </p>
            </div>
        </main>
    )
}