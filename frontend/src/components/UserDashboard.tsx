import React, { useEffect, useRef, useCallback } from "react";
import { useQuery, useInfiniteQuery } from "react-query";
import {
  getUserDetails,
  getTransactionHistory,
  isMaintenanceActive,
  getEmergencyWalletStatus,
} from "../services/api";
import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
  CardTitle,
} from "../components/ui/Card";
import TransactionItem from "./TransactionItem";
import BalanceChart from "./BalanceChart";
import { CreditCard } from "lucide-react";
import EmergencyCreditCard from "./ui/EmergencyWallet";
import OfflineTransfer from "./OfflineTransfer";
import { motion } from "motion/react";
import { useSearchParams } from "react-router-dom";
const UserDashboard: React.FC = () => {
  const [searchParams] = useSearchParams();
  const limit = parseInt(searchParams.get("take") as string) || 5;

  const scrollRef = useRef<HTMLDivElement>(null);
  const {
    data: transactions,
    isLoading: isLoadingTransactions,
    isError: isErrorTransactions,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch: refetchTransactions,
  } = useInfiniteQuery(
    "transactionHistory",
    ({ pageParam = 1 }) => getTransactionHistory(pageParam, limit),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.meta.page < lastPage.meta.total) {
          return lastPage.meta.page + 1;
        }
        return undefined;
      },
      refetchInterval: 5000,
    }
  );
  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      if (
        scrollTop + clientHeight >= scrollHeight - 50 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);
  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      return () => {
        currentRef.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);
  const {
    data: userDetails,
    isLoading: isLoadingDetails,
    isError: isErrorDetails,
    refetch: refetchDetails,
  } = useQuery("userDetails", getUserDetails, {
    refetchInterval: 5000,
  });

  const handleRefresh = () => {
    refetchDetails();
    refetchTransactions();
  };
  const [maintenanceAlertStatus, setMaintenanceAlertStatus] =
    React.useState<boolean>(false);
  const [maintenanceStatus, setMaintenanceStatus] =
    React.useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    getEmergencyWalletStatus().then((status) => {
      if (isMounted) {
        setMaintenanceAlertStatus(status?.hasCredit ?? false);
      }
    });
    isMaintenanceActive().then((status) => {
      if (isMounted) {
        setMaintenanceStatus(status?.isActive ?? false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoadingDetails || isLoadingTransactions) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (isErrorDetails || isErrorTransactions) {
    return (
      <div className="text-center py-10">
        <h3 className="text-lg font-medium text-red-600 mb-2">
          Error loading data
        </h3>
        <p className="text-gray-600 mb-4">
          We couldn't load your account information.
        </p>
        <button
          onClick={handleRefresh}
          className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  const balance = userDetails?.balance?.amount || 0;
  const formattedBalance = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NPR",
  }).format(balance);

  return (
    <div
      className={`grid grid-cols-1 ${
        !maintenanceStatus ? "lg:grid-cols-3" : ""
      } gap-6`}
    >
      {/* Balance Card */}
      {!maintenanceStatus && (
        <motion.div
          className="w-full col-span-3"
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 100,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Card className="lg:col-span-2 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
            <CardHeader className="">
              <div className="flex items-center">
                <div className="p-3 bg-blue-700 rounded-full mr-4">
                  <CreditCard size={24} />
                </div>
                <div>
                  <CardDescription className="text-blue-100">
                    Current Balance
                  </CardDescription>
                  <CardTitle className="text-3xl text-white">
                    {formattedBalance}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-800 rounded-lg p-4">
                <h3 className="text-sm font-medium text-blue-100 mb-2">
                  Balance History
                </h3>
                {transactions?.pages &&
                transactions.pages[0].data.length > 0 ? (
                  <BalanceChart
                    transactions={transactions.pages.flatMap(
                      (page) => page.data
                    )}
                    currentBalance={balance}
                  />
                ) : (
                  <p className="text-blue-200 text-sm">
                    No transaction history available
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
     
      {!maintenanceStatus ? (
        <>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest activity</CardDescription>
            </CardHeader>
            <CardContent
              className="divide-y divide-gray-100 max-h-[350px] overflow-y-auto"
              ref={scrollRef}
            >
              {transactions?.pages.map((page, pageIndex) => (
                <React.Fragment key={pageIndex}>
                  {page.data.map((transaction) => (
                    <TransactionItem
                      key={transaction.id}
                      transaction={transaction}
                    />
                  ))}
                </React.Fragment>
              ))}
              {isLoadingTransactions && (
                <div className="flex justify-center items-center py-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900"></div>
                </div>
              )}
              {!hasNextPage && !isLoadingTransactions && (
                <p className="py-4 text-gray-500 text-center">
                  No more transactions
                </p>
              )}
              {transactions?.pages[0].data.length === 0 &&
                !isLoadingTransactions && (
                  <p className="py-4 text-gray-500 text-center">
                    No transactions yet
                  </p>
                )}
            </CardContent>
          </Card>
        </>
      ) : (
        <OfflineTransfer />
      )}
       <div className="col-span-3">
        {!maintenanceAlertStatus && <EmergencyCreditCard />}
      </div>
    </div>
  );
};

export default UserDashboard;
