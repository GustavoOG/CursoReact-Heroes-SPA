import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route
            path="login/*"
            element={
              <PublicRoute>
                <Routes>
                  <Route path="/*" element={<LoginPage />} />
                </Routes>
              </PublicRoute>
            }
          />
          {/* <Route path="login" element={<LoginPage />} /> */}
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            }
          />

          {/* <Route path="/*" element={<HeroesRoutes />} /> */}
        </Routes>
      </div>
    </>
  );
};
