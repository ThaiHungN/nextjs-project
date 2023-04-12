import { LayoutProps } from '@/models/index';
import * as React from 'react';
import Link from 'next/link';


export function MainLayout ({children}: LayoutProps) {
    return(
        <div>
            <h1>Main layout</h1>

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>

            <div>
                {children}
            </div>
        </div>
    )
}
