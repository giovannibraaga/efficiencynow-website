import PrivateRoute from "@/app/auth/PrivateRoute";
import Sidebar from "./components/ui/Sidebar";

const UserAreaLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <PrivateRoute>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 p-8 bg-gray-100 text-black">{children}</main>
      </div>
    </PrivateRoute>
  );
};

export default UserAreaLayout;
