import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
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
      "@store": "/src/App/Store",
      "@styles": "/src/App/styles",
    },
  },
});
