"use client"
import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: 'modal' | 'rdirct',
    asChild?: boolean;
}

export const LoginButton = ({
    children,
    mode = 'rdirct',
    asChild,
}: LoginButtonProps) => {
    const router = useRouter();
    const onClick = () => {
        router.push('/auth/login')
    }
    if (mode === 'modal') {
        return (
            <span>
                TODO: Implmnt modal
            </span>
        )
    }
    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}