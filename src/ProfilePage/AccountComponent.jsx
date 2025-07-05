// export default function AccountComponent() {
//     return(
//         <h1>Account Page</h1>
//     )
// }

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"; // optional loading UI
import axios from "axios";
import { useEffect, useState } from "react";

export default function AccountComponent() {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAccounts = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8080/api/accounts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAccounts(response.data);
    } catch (err) {
      console.error("Failed to fetch accounts:", err);
      setError("Could not fetch account details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  if (loading) {
    return (
      <div className="p-6 space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Bank Accounts</h2>
      <div className="grid gap-4">
        {accounts.map((acc) => (
          <Card key={acc.id}>
            <CardHeader>
              <CardTitle>{acc.bankName} - {acc.accountType}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Account No:</strong> {acc.accountNumber}</div>
              <div><strong>Balance:</strong> ₹{acc.balance}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}


