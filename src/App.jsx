import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import Title from "./components/Title";
import TransactionList from "./components/TransactionList";

function App() {
	return (
		<>
			<Title />
			<div className="container">
				<Balance />
				<IncomeExpense />
				<TransactionList />
				<AddTransaction />
			</div>
		</>
	);
}

export default App;
