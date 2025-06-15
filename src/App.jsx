import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Test from './pages/test/Test'
import MainPage from './pages/MainPage/MainPage';
import AnalysisPage from './pages/AnalysisPage/AnalysisPage'
import HistoryPage from './pages/HistoryPage/HistoryPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: 'test',
                element: <Test />,
            },
                        {
                path: 'analysis',
                element: <AnalysisPage />,
            },
                        {
                path: 'history',
                element: <HistoryPage />,
            },
        ],
    },
]);

function App() {

    return <RouterProvider router={router} />;
}
export default App;