"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

interface AuthContextType {
  user: { id: string; name: string } | null;
  login: (userCredentials: {
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ id: string; name: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get(`/api/users/profile`, {
          withCredentials: true,
        });

        if (response.status === 200) {
          const data = response.data;
          setUser({ id: data.id, name: data.name });
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Erro ao verificar a sessão:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const login = async (userCredentials: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await axios.post("/api/users/login", userCredentials, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        const data = response.data;
        setUser({ id: data.id, name: data.name });
        router.push("/user-area");
      } else {
        console.error("Erro no login: credenciais inválidas.");
        throw new Error("Credenciais inválidas");
      }
    } catch (error) {
      console.error("Erro durante o login:", error);
      throw new Error("Erro ao se conectar ao servidor");
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post(
        "/api/users/logout",
        {},
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setUser(null);
        router.push("/");
      } else {
        console.error("Erro ao fazer logout no servidor");
      }
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
