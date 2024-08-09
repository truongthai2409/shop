import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./config/routers";
import { Toaster } from "sonner";
// import CartProvider from "./stores";
// import { Provider } from 'react-redux';
// import store from "./stores";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <Provider store={store}> */}
          <Toaster/>
          <AppRouter />
        {/* </Provider> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
