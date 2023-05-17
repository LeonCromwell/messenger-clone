
'use client';

import clsx from 'clsx';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disable?: boolean;
}

const Button: React.FC<ButtonProps> = () => {
    return (
        <div>
            Hello button
        </div>
    );
}

export default Button;