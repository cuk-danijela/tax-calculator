import React from "react";
import { useState } from 'react';
import FormInput from "./FormInput";
import TableData from "./TableData";



export default function TableView() {

    const WEEK_PERCENT = 0.1974;
    const FORTH_PERCENT = 0.3948;
    const MONTH_PERCENT = 0.7896;
    const YEAR_PERCENT = 2.3688;

    const [visible, setVisible] = useState(false)
    var [tax, setTax] = useState();
    var [netIncome, setNetIncome] = useState();
    const [value, setValue] = React.useState();
    const [tableData, setTableData] = useState([])
    const [formInputData, setformInputData] = useState(
        {
            totalIncome: '',
            incomePeriod: '',
            incomeType: ''
        }
    );

    const handleChange = (evnt) => {
        setValue(evnt.target.value);
        const newInput = (data) => ({ ...data, [evnt.target.name]: evnt.target.value })
        setformInputData(newInput)
    }

    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        setVisible(true);

        const checkEmptyInput = !Object.values(formInputData).every(res => res === "")
        if (checkEmptyInput) {
            const newData = (data) => ([...data, formInputData])
            setTableData(newData);
            const emptyInput = { totalIncome: '', incomePeriod: '', incomeType: '' }
            setformInputData(emptyInput)
        }


        switch (formInputData.incomePeriod) {
            case "Weekly":
                setTax(tax = formInputData.totalIncome * WEEK_PERCENT);
                setNetIncome(netIncome = formInputData.totalIncome * (1 - WEEK_PERCENT));
                break;
            case "Fortnigthly":
                setTax(tax = formInputData.totalIncome * FORTH_PERCENT);
                setNetIncome(netIncome = formInputData.totalIncome * (1 - FORTH_PERCENT));
                break;
            case "Monthly":
                setTax(tax = formInputData.totalIncome * MONTH_PERCENT);
                setNetIncome(netIncome = formInputData.totalIncome * (1 - MONTH_PERCENT));
                break;
            case "Annualy":
                setTax(tax = formInputData.totalIncome * YEAR_PERCENT);
                setNetIncome(netIncome = formInputData.totalIncome * (1 - YEAR_PERCENT));
                break;
            default:
                alert("Please choose income period!");
        }

        console.log('Total income:' + formInputData.totalIncome);
        console.log('Income type:' + formInputData.incomeType);
        console.log('Income period:' + formInputData.incomePeriod);
        console.log('Net income:' + netIncome);
        console.log('Tax:' + tax);
    }


    return (
        <React.Fragment>
            <FormInput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} />
            <TableData handleChange={handleChange} tableData={tableData} visible={visible} tax={tax} netIncome={netIncome} value={value} />
        </React.Fragment>
    );
}