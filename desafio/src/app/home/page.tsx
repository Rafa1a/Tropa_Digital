import CardHome from '@/components/home/Card_home';
import React from 'react';

export default function PageHome() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <main className="flex flex-col w-full h-full">
                <CardHome />
            </main>
        </div>
    );
}
