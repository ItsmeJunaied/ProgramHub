'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode, useState } from 'react';

const Provider = ({ children }) => {

    const [queryClient] = useState(() => new QueryClient())
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </div>
    );
};

export default Provider;