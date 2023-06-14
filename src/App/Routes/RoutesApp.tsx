/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import * as LAZY_ROUTES from "./LazyRoutes";
import ProtectedRoute from "./ProtectedRoute";
import { useAppSelector } from "../Store/Store";
import Loading from "../Components/Loading/Loading";

const RoutesApp = () => {
  const { isLoading } = useAppSelector((state) => state.loading);
  return (
    <React.Fragment>
      <Loading isLoading={isLoading} />
      <Suspense fallback={<Loading isLoading={true} />}>
        <Routes>
          {/* UNAUTHORIZE */}
          <Route path="*" element={<Navigate to="/login" />} />
          {/* PUBLIC */}
          <Route path="/register" element={<LAZY_ROUTES.Register />} />
          <Route path="/login" element={<LAZY_ROUTES.LoginClient />} />

          {/* AUTHORIZED ADM */}

          {/* AUTHORIZED CLIENT */}

          {/* AUTHORIZED CLIENT EXEMPLE */}

          <Route
            path="/client/home"
            element={
              <ProtectedRoute>
                <LAZY_ROUTES.HomeClient />
              </ProtectedRoute>
            }
          />

          <Route path="unauthorize" element={<LAZY_ROUTES.Unauthorize />} />
          <Route path="not-found" element={<LAZY_ROUTES.NotFound />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
};

export default RoutesApp;
