import { useEffectOnce, useLocalStorage } from "react-use";
import { alertError, alertSuccess } from "../../lib/alert";
import { logout } from "../../lib/api/user";
import { useNavigate } from "react-router";
import { errorHandler } from "../../lib/api/errorHandler";

export default function Logout() {
  const [token, _] = useLocalStorage("token", "");
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout(token);

      await alertSuccess("You have been logged out successfully");

      await navigate({
        pathname: "/login",
      });
    } catch (error) {
      await errorHandler(error, alertError);
    }
  }

  useEffectOnce(() => {
    handleLogout();
  });

  return <></>;
}
