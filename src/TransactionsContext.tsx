import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "./services/api";
type TransactionType = {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
};

/**
 * Estou criado um tipo que herda todas as caracteristicas do transactionType
 * sendo que estou estou omitindo as propriedades id e createdAt
 */
type TransactionSubmit = Omit<TransactionType, "id" | "createdAt">;

//sempre que um componente for children, devo tipa-lo da seguinte forma
type TransactionsProviderProps = {
  children: ReactNode;
};

type TransactionsContextData = {
  transactions: TransactionType[];
  createTransaction: (trasactions: TransactionSubmit) => Promise<void>;
};
//criando um context
export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData //forçando um tipagem
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => {
      const { transactions } = response.data;
      setTransactions(transactions);
    });
  }, []);

  //toda função assincrona retorna uma promise
  async function createTransaction(transactionDataSubmit: TransactionSubmit) {
    const response = await api.post("transactions", {
      ...transactionDataSubmit,
      createdAt: new Date(),
    });
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {
        //agora com isso estou exportando um provider, com o contexto das
        //transações setadas no seu value para que eu possa utiliza-lo
      }
      {children}
    </TransactionsContext.Provider>
  );
}
