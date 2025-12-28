// src/theme/Root.tsx
import React from 'react';
import BottomNav from '@site/src/components/BottomNav';

export default function Root({ children }) {
    return (
        <>
            {children}
            <BottomNav />
        </>
    );
}