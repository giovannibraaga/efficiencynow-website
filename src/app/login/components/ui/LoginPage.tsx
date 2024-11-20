import Link from "next/link"

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Senha</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <div className="mb-4">
            <p className="text-black hover:text-green-700">
              <Link href="/register">Ainda não tem uma conta? Crie agora.</Link>
              </p></div>
          <button
            type="submit"
            className="w-full py-2 bg-green-700 text-white rounded hover:bg-green-800"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
