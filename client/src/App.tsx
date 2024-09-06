import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./config/routers";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import store, { persistor } from "./stores";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Toaster richColors />
            <AppRouter />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
