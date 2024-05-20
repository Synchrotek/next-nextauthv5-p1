"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { ReactNode } from 'react'

// prop interface =================================
interface LoginButtonProps {
    children: ReactNode,
    mode?: "modal" | "redirect",
    asChild?: boolean;
}

// AIN Funtional component ========================
const LoginButton = ({
    children, mode = 'redirect', asChild
}: LoginButtonProps) => {
    const router = useRouter();

    const onBtnClick = () => {
        router.push("/auth/login");
    }

    if (mode === 'modal') {
        return (
            <span>
                TODO: Implement modal
            </span>
        )
    }

    return (
        <span onClick={onBtnClick} className='cursor-pointer'>
            {children}
        </span>
    )
}


export default LoginButton;