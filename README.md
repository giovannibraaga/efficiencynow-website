# Efficiency Now - Frontend

Este é o frontend da aplicação **Efficiency Now**, desenvolvida com **React**, **Next.js**, **TypeScript** e **Tailwind CSS**. A aplicação tem como objetivo ajudar os usuários a economizar energia e reduzir emissões de carbono, promovendo um futuro mais sustentável.

---

## 🚀 Funcionalidades

- 📂 **Login e Registro de Usuários**: Autenticação com cookies para segurança.
- 🌟 **Cálculo de Economia Energética**:
  - Economia ao substituir lâmpadas antigas por LED.
  - Economia no uso de ar condicionado com configurações ideais.
- 📋 **Interface Intuitiva**: Design responsivo e agradável.
- 🔒 **Rotas Protegidas**: Acesso à área do usuário somente com autenticação.

---

## 🛠️ Tecnologias Utilizadas

- **React** e **Next.js**: Frameworks modernos para construção de interfaces e rotas.
- **TypeScript**: Garantia de segurança e consistência no código.
- **Tailwind CSS**: Estilização rápida e eficiente.
- **Axios**: Requisições HTTP para integração com o backend.
- **Context API**: Gerenciamento de estado global para autenticação e proteção de rotas.

---

## ⚙️ Configuração do Ambiente

### Pré-requisitos

- Node.js v18+
- npm ou yarn

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/giovannibraaga/efficiencynow-website.git
   cd efficiencynow-website

   ```

2. Instale as dependências:

   ```bash
   npm install

   ou

   yarn install
   ```

3. Configure as variáveis de ambiente:

   - Crie um arquivo `.env.local` na raiz do projeto.
   - Adicione as variáveis de ambiente necessárias, como a URL do backend.

   ```bash
   NEXT_PUBLIC_BACKEND_URL=https://url-do-seu-backend
   ```

4. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse a aplicação no navegador:
   ```
   http://localhost:3000
   ```

---

### 📂 Estrutura de Pastas

```bash
src/
├── app/
├── ├── auth/
│   │   └── AuthContext.tsx
│   │   └── AuthProvider.tsx
│   ├── user-area/
│   │   ├── lamp-economy/
│   │   │   └── page.tsx
│   │   ├── ac-economy/
│   │   │   └── page.tsx
│   │   ├── components/ui/
│   │   └── page.tsx
│   ├── login/
│   │   └── components/ui
│   │   └── page.tsx
│   ├── register/
│   │   └── components/ui
│   │    └── page.tsx
│   ├── components/ui/
│   ├── layout.tsx
│   └── page.tsx
└──
```

---

### 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/sua-feature
   ```
3. Adicione suas alterações:
   ```bash
   git add suas-alteracoes
   ```
4. Faça o commit das suas alterações:
   ```bash
   git commit -m 'Adiciona nova feature'
   ```
5. Envie para o repositório remoto:
   ```bash
   git push origin feature/sua-feature
   ```
6. Abra um Pull Request.

---
