import { useEffect, useState } from "react";

import { useAuth } from "../context/AuthContext";
import { getUserDetails } from "../services/api";

const PersistentRefreshToken = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await getUserDetails();
        setUser(response.user);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("bankToken");
        setUser(null);
      }
    };

    checkAuth().then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col container mx-auto gap-12 items-center justify-center h-screen"></div>
    );
  }

  return children; // No UI rendering
};

export default PersistentRefreshToken;
