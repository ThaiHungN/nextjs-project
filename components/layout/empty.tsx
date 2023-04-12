import { LayoutProps } from '@/models/index';
import * as React from 'react';
import Link from 'next/link';

export function EmptyLayout ({children}: LayoutProps) {
    return(
        <>
            {children}
        </>
    )
}
