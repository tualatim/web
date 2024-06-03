import { Route, Routes } from 'react-router-dom'
import { Login, NotFound, Notes, Signin } from '../../pages'
import { RoutesEnum } from '../CONSTANTS'
import { ProtectedRoute } from '../components'
import { useUserStorage } from '../../store/useUserStorage'

export const AppRoutes = () => {
  const { user } = useUserStorage()

  const isAuthenticated = !!user

  return (
    <Routes>
      {/* Private Routes */}
      <Route
        index
        path={RoutesEnum.ROOT}
        element={
          <ProtectedRoute element={<Notes />} isAuthenticated={isAuthenticated} />
        }
      />

      {/* Public Routes */}
      <Route path={RoutesEnum.LOGIN} element={<Login />} />
      <Route path={RoutesEnum.SIGNIN} element={<Signin />} />

      {/* 404 PAGE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
