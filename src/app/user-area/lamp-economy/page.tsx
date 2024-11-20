"use client";

import React, { useState } from "react";
import axios from "axios";

const LampEconomyPage = () => {
  const [formData, setFormData] = useState({
    numberOfFluorescentLamps: 0,
    numberOfIncandescentLamps: 0,
    numberOfHalogenLamps: 0,
  });
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(`/api/lamp-economy/calc`, formData, {
        withCredentials: true,
      });
      setResult(response.data);
    } catch {
      setError(
        "Erro ao calcular economia. Verifique os dados e tente novamente."
      );
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Economia de Lâmpadas</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Lâmpadas Fluorescentes:</label>
          <input
            type="number"
            name="numberOfFluorescentLamps"
            value={formData.numberOfFluorescentLamps}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">
            Lâmpadas Incandescentes:
          </label>
          <input
            type="number"
            name="numberOfIncandescentLamps"
            value={formData.numberOfIncandescentLamps}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Lâmpadas Halógenas:</label>
          <input
            type="number"
            name="numberOfHalogenLamps"
            value={formData.numberOfHalogenLamps}
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
          Economia total: {result.toFixed(2)}%
        </div>
      )}
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">{error}</div>
      )}
    </div>
  );
};

export default LampEconomyPage;
