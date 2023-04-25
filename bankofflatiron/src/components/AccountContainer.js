import React from "react";
import TransactionList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
    return (
        <div>
            <Search />
            <AddTransactionForm />
            <TransactionList />
        </div>
    );
}

export default AccountContainer;