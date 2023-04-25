import React from "react";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import TransactionsList from "./TransactionsList";

function AccountContainer() {
    return (
        <div>
            <Search />
            <AddTransactionForm />
            <TransactionsList />
        </div>
    );
}

export default AccountContainer;