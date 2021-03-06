import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";
import { useModifieldTheme } from "./hooks/useModifielTheme";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const { theme } = useModifieldTheme();
  //padrão de declaração de função sempre que uma função for ser chamada atravez de um clique do usuario
  //deve-se ser iniciada com ==> handle
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      {/**
       * Encapsulo tudo com o provider para que todos os components que estejam sendo
       * encapsulados com ele tenham acesso as propriedades. Sendo assim, eu posso
       * encapsular apenas os compoenents que eu quero que tenham acesso aquele contexto
       */}
      <GlobalStyle theme={theme} />

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}

export default App;
