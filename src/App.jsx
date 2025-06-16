import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Test from './pages/test/Test'
import AnalyzePage from './pages/AnalyzePage/AnalyzePage';
import ResultPage from './pages/ResultPage/ResultPage'
import HistoryPage from './pages/HistoryPage/HistoryPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <AnalyzePage />,
            },
            {
                path: 'result',
                element: <ResultPage />,
            },
                        {
                path: 'history',
                element: <HistoryPage />,
            },
                        {
                path: 'test',
                element: <Test />,
            },
        ],
    },
]);

function App() {

    return <RouterProvider router={router} />;
}
export default App;