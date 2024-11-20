"use client";

import { useState, useCallback } from "react";
import axios from "axios";
import dotenv from "dotenv";
import Link from "next/link";

dotenv.config();

type FormData = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setloading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setloading(true);
      setMessage("");

      try {
        const response = await axios.post("/api/users/register", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 201) {
          setMessage("Usuário cadastrado com sucesso!");
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response?.data) {
          setMessage(
            (error.response.data as { message?: string }).message ||
              "Erro ao registrar o usuário."
          );
        } else {
          setMessage("Erro ao conectar ao servidor.");
        }
      } finally {
        setloading(false);
      }
    },
    [formData]
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Registrar
        </h2>
        {message && (
          <div
            className={`mb-4 p-3 text-center rounded ${
              message.includes("sucesso")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <div className="mb-4">
            <p>
              <Link className="text-black hover:text-green-700" href="/login">
                Já possui uma conta? Faça login.
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className={`w-full py-2 text-white rounded ${
              loading
                ? "bg-green-500 cursor-not-allowed"
                : "bg-green-700 hover:bg-green-800"
            }`}
            disabled={loading}
          >
            {loading ? "Registrando..." : "Registrar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
