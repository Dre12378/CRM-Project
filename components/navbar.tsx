"use client"

import { SignInButton, SignUpButton } from "@clerk/nextjs"
import { Trello } from "lucide-react"

export default function Navbar() {

    return (
        <header className="sticky border-b border-gray-700/50 bg-gray-800/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-3 sm:px-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <Trello className="h-5 w-5 sm:h-8 sm:w-8"/>
                    <span >Trello Clone</span>
                </div>
                <div className="flex items-center gap-2.5">
                    <SignInButton>
                        <span>Sign In</span>
                    </SignInButton>
                    <SignUpButton>
                        <span>Sign Up</span>
                    </SignUpButton>
                </div>
            </div>
        </header>
    )
}