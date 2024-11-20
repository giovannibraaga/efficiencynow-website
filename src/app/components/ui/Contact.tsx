"use client";

import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

return (
    <>
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl text-black font-semibold mb-6 text-center">
                Tire suas dúvidas
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700">
                            Nome:
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-700">
                        Mensagem:
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full h-32 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-900"
                >
                    Enviar
                </button>
            </form>
        </div>
    </>
);
};

export default Contact;
