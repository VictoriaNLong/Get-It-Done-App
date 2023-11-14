import { useEffect, useState } from "react";
import axios from "axios";

function useAuth() {
  const [auth, setAuth] = useState();

  const verifyAuth = async () => {
    try {
      const res = await axios.get("https://get-it-done-app-api.onrender.com/api/auth/is_logged_in");
      return res.data;
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  useEffect(() => {
    (async () => {
      const data = await verifyAuth();
      setAuth(data);
    })();
  }, []);
  return { auth };
}

export default useAuth;
