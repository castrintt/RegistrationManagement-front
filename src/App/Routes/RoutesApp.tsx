/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import * as LAZY_ROUTES from "./LazyRoutes";
import ProtectedRoute from "./ProtectedRoute";
import { useAppSelector } from "@store/Store";
import Loading from "@components/Loading/Loading";
import { Paths } from "./DynamicPaths";

const RoutesApp = () => {
  const { isLoading } = useAppSelector((state) => state.loading);
  return (
    <React.Fragment>
      <Loading isLoading={isLoading} />
      <Suspense fallback={<Loading isLoading={true} />}>
        <Routes>
          {/* UNAUTHORIZE */}
          <Route path="*" element={<Navigate to="/client/login" />} />

          {/* PUBLIC */}
          <Route
            path="/client/register"
            element={<LAZY_ROUTES.Client.Register />}
          />
          <Route path="/client/login" element={<LAZY_ROUTES.Client.Login />} />

          {/* AUTHORIZED ADM */}

          {/* AUTHORIZED CLIENT - home */}
          <Route
            path="/client/home"
            element={
              <ProtectedRoute>
                <LAZY_ROUTES.Client.Home />
              </ProtectedRoute>
            }
          />
          {/*  AUTHORIZED CLIENT - user data */}
          {Paths.Client.map((values: { path: string }, index: number) => (
            <React.Fragment key={index}>
              <Route
                path={values.path}
                element={
                  <ProtectedRoute>
                    <LAZY_ROUTES.Client.User />
                  </ProtectedRoute>
                }
              />
            </React.Fragment>
          ))}
          {/* AUTHORIZED CLIENT - application */}
          <Route
            path="/client/application"
            element={
              <ProtectedRoute>
                <LAZY_ROUTES.Client.Application />
              </ProtectedRoute>
            }
          />
          {/* AUTHORIZED CLIENT - documents */}
          <Route
            path="/client/documents"
            element={
              <ProtectedRoute>
                <LAZY_ROUTES.Client.Documents />
              </ProtectedRoute>
            }
          />

          {/* UNAUTHORIZE + NOTFOUND */}
          <Route path="unauthorize" element={<LAZY_ROUTES.Unauthorize />} />
          <Route path="not-found" element={<LAZY_ROUTES.NotFound />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
};

export default RoutesApp;
