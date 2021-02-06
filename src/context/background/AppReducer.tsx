import Actions, {
  SetStateAction,
  SetTransactionAction,
  SetTransactionsAction
} from "../contextActions";
import { IAppState } from "./InitialAppState";

type AppAction = SetTransactionAction | SetTransactionsAction | SetStateAction;

const appReducer = (state: IAppState, action: AppAction): IAppState => {
  switch (action.type) {
    case Actions.SET_STATE:
      return {
        ...state,
        ...action.payload
      };
    case Actions.SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload
      };
    case Actions.SET_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    default:
      return state;
  }
};

export default appReducer;
