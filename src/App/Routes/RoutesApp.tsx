/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import * as LAZY_ROUTES from "./LazyRoutes";
import ProtectedRoute from "./ProtectedRoute";

const RoutesApp = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        {/* UNAUTHORIZE */}
        <Route path="*" element={<Navigate to="not-found" />} />
        {/* PUBLIC */}
        <Route path="/register" element={<LAZY_ROUTES.Register />} />
        <Route path="/login" element={<LAZY_ROUTES.LoginClient />} />

        {/* AUTHORIZED ADM */}

        {/* AUTHORIZED CLIENT */}

        {/* AUTHORIZED CLIENT EXEMPLE */}

        {/* <Route
          path="login"
          element={
            <ProtectedRoute>
              <LAZY_ROUTES.LoginClient />
            </ProtectedRoute>
          }
        /> */}

        <Route path="unauthorize" element={<LAZY_ROUTES.Unauthorize />} />
        <Route path="not-found" element={<LAZY_ROUTES.NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesApp;
