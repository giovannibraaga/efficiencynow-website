"use client";

import React, { useState } from "react";
import axios from "axios";

const ACEconomyPage = () => {
  const [formData, setFormData] = useState({
    numberOfAirConditioners: 1,
    btu: 7500,
    temperature: 22,
  });
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.temperature < 18 || formData.temperature > 30) {
      setError("A temperatura precisa estar entre 18 e 30°C.");
      return;
    }

    try {
      const response = await axios.post(
        "/api/ac-economy/calc-monthly-economy",
        formData,
        { withCredentials: true }
      );
      setResult(response.data);
    } catch {
      setError(
        "Erro ao calcular economia. Verifique os dados e tente novamente."
      );
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Economia de Ar Condicionado</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Número de Aparelhos:</label>
          <input
            type="number"
            name="numberOfAirConditioners"
            value={formData.numberOfAirConditioners}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            min={1}
          />
        </div>
        <div>
          <label className="block text-gray-700">BTU:</label>
          <select
            name="btu"
            value={formData.btu}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value={7500}>7500 BTU</option>
            <option value={9000}>9000 BTU</option>
            <option value={12000}>12000 BTU</option>
            <option value={18000}>18000 BTU</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Temperatura (°C):</label>
          <input
            type="number"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-green-700 text-white rounded hover:bg-green-800"
        >
          Calcular Economia
        </button>
      </form>
      {result !== null && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          Caso você utilizasse o ar condicionado em uma temperatura média de
          22-24°C, você teria uma economia média de: {result.toFixed(2)}%
        </div>
      )}
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">{error}</div>
      )}
    </div>
  );
};

export default ACEconomyPage;
