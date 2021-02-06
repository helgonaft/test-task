import { Transaction } from "../services/TransactionsService";
import { IAppState } from "./background/InitialAppState";

enum Actions {
  SET_TRANSACTIONS = "SET_TRANSACTIONS",
  SET_TRANSACTION = "SET_TRANSACTION",
  SET_STATE = "SET_STATE"
}

export interface SetTransactionsAction {
  type: Actions.SET_TRANSACTIONS;
  payload: Transaction[];
}

export interface SetTransactionAction {
  type: Actions.SET_TRANSACTION;
  payload: Transaction;
}

export interface SetStateAction {
  type: Actions.SET_STATE;
  payload: Partial<IAppState>;
}

export default Actions;
