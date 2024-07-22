import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react';
const queryClient = new QueryClient();

function App() {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <Layout>
                    <Header>Сервисы</Header>
                    
                </Layout>
            </QueryClientProvider>
        </div>
    );
}

export default App;
