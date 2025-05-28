import { useEffectOnce } from "react-use";
import { alertError, alertSuccess } from "../../lib/alert";
import { logout } from "../../lib/api/user";
import { useNavigate } from "react-router";
import { errorHandler } from "../../lib/api/errorHandler";
import { useAuthStore } from "../../stores/auth";

export default function Logout() {
  const { token } = useAuthStore();
  const navigate = useNavigate();
  const { clearAuth } = useAuthStore();

  async function handleLogout() {
    try {
      await logout(token.token);

      await clearAuth();

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
