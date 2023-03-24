import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Table from './pages/table';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/table',
    element: <Table />
  },
])

export default routes;