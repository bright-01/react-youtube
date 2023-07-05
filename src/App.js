import { Outlet} from "react-router";
import SearchHeader from "./components/SearchHeader";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {

  const queryClient = new QueryClient();

  return <>
    <SearchHeader/>
    <QueryClientProvider client={queryClient}>
      <Outlet/>
    </QueryClientProvider>
  </>;
}

export default App;

/**
 * react query
 *  1. react-query 자체 캐싱
 * 2. fetch 과정 간소화
 * 3. 다양한 hooks
 * */
