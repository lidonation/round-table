import { createContext } from "react";

export interface FetchStatus {
  refetch: boolean;
  lastFetched: number;
  isLoading: boolean;
  isCompleted: boolean;
}

export interface walletRefreshContextProps {
  fetchStatus: FetchStatus;
  setFetchStatus: React.Dispatch<React.SetStateAction<FetchStatus>>;
}

export const walletRefreshContext = createContext<walletRefreshContextProps>({
    fetchStatus: {
        refetch:false,
        lastFetched: 0,
        isLoading: false,
        isCompleted: true,
      },
      setFetchStatus: () => {},
});

