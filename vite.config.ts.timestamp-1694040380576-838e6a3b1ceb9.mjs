// vite.config.ts
import { defineConfig } from "file:///G:/Personal/RegistrationManagement/RegistrationManagement-front/node_modules/vite/dist/node/index.js";
import react from "file:///G:/Personal/RegistrationManagement/RegistrationManagement-front/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@clientService": "/business/service/client",
      "@admService": "/business/service/adm",
      "@enums": "/business/domain/enums",
      "@config": "/config",
      "@utils": "/utils",
      "@clientResponse": "/business/domain/entities/response/client",
      "@admResponse": "/business/domain/entities/response/adm",
      "@clientRequest": "/business/domain/entities/request/client",
      "@admRequest": "/business/domain/entities/request/adm",
      "@environments": "/environments",
      "@assets": "/src/App/Assets",
      "@components": "/src/App/Components",
      "@clientPages": "/src/App/Pages/Client",
      "@admPages": "/src/App/Pages/Adm",
      "@commonPages": "/src/App/Pages/Common",
      "@routes": "/src/App/Routes",
      "@store": "/src/App/Store"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxQZXJzb25hbFxcXFxSZWdpc3RyYXRpb25NYW5hZ2VtZW50XFxcXFJlZ2lzdHJhdGlvbk1hbmFnZW1lbnQtZnJvbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkc6XFxcXFBlcnNvbmFsXFxcXFJlZ2lzdHJhdGlvbk1hbmFnZW1lbnRcXFxcUmVnaXN0cmF0aW9uTWFuYWdlbWVudC1mcm9udFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRzovUGVyc29uYWwvUmVnaXN0cmF0aW9uTWFuYWdlbWVudC9SZWdpc3RyYXRpb25NYW5hZ2VtZW50LWZyb250L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQGNsaWVudFNlcnZpY2VcIjogXCIvYnVzaW5lc3Mvc2VydmljZS9jbGllbnRcIixcbiAgICAgIFwiQGFkbVNlcnZpY2VcIjogXCIvYnVzaW5lc3Mvc2VydmljZS9hZG1cIixcbiAgICAgIFwiQGVudW1zXCI6IFwiL2J1c2luZXNzL2RvbWFpbi9lbnVtc1wiLFxuICAgICAgXCJAY29uZmlnXCI6IFwiL2NvbmZpZ1wiLFxuICAgICAgXCJAdXRpbHNcIjogXCIvdXRpbHNcIixcbiAgICAgIFwiQGNsaWVudFJlc3BvbnNlXCI6IFwiL2J1c2luZXNzL2RvbWFpbi9lbnRpdGllcy9yZXNwb25zZS9jbGllbnRcIixcbiAgICAgIFwiQGFkbVJlc3BvbnNlXCI6IFwiL2J1c2luZXNzL2RvbWFpbi9lbnRpdGllcy9yZXNwb25zZS9hZG1cIixcbiAgICAgIFwiQGNsaWVudFJlcXVlc3RcIjogXCIvYnVzaW5lc3MvZG9tYWluL2VudGl0aWVzL3JlcXVlc3QvY2xpZW50XCIsXG4gICAgICBcIkBhZG1SZXF1ZXN0XCI6IFwiL2J1c2luZXNzL2RvbWFpbi9lbnRpdGllcy9yZXF1ZXN0L2FkbVwiLFxuICAgICAgXCJAZW52aXJvbm1lbnRzXCI6IFwiL2Vudmlyb25tZW50c1wiLFxuICAgICAgXCJAYXNzZXRzXCI6IFwiL3NyYy9BcHAvQXNzZXRzXCIsXG4gICAgICBcIkBjb21wb25lbnRzXCI6IFwiL3NyYy9BcHAvQ29tcG9uZW50c1wiLFxuICAgICAgXCJAY2xpZW50UGFnZXNcIjogXCIvc3JjL0FwcC9QYWdlcy9DbGllbnRcIixcbiAgICAgIFwiQGFkbVBhZ2VzXCI6IFwiL3NyYy9BcHAvUGFnZXMvQWRtXCIsXG4gICAgICBcIkBjb21tb25QYWdlc1wiOiBcIi9zcmMvQXBwL1BhZ2VzL0NvbW1vblwiLFxuICAgICAgXCJAcm91dGVzXCI6IFwiL3NyYy9BcHAvUm91dGVzXCIsXG4gICAgICBcIkBzdG9yZVwiOiBcIi9zcmMvQXBwL1N0b3JlXCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1WCxTQUFTLG9CQUFvQjtBQUNwWixPQUFPLFdBQVc7QUFFbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLGtCQUFrQjtBQUFBLE1BQ2xCLGVBQWU7QUFBQSxNQUNmLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLG1CQUFtQjtBQUFBLE1BQ25CLGdCQUFnQjtBQUFBLE1BQ2hCLGtCQUFrQjtBQUFBLE1BQ2xCLGVBQWU7QUFBQSxNQUNmLGlCQUFpQjtBQUFBLE1BQ2pCLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxNQUNmLGdCQUFnQjtBQUFBLE1BQ2hCLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLE1BQ2hCLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
