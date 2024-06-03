import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './navigation/routes'

// Toastify dependencies
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer />
    </BrowserRouter>
  )
}
