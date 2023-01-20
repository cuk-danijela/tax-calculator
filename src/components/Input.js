import React, { Component } from 'react';
import { useState } from 'react';

function Input() {

    const WEEK_PERCENT = 0.19;
    const FORTH_PERCENT = 0.3948;
    const MONTH_PERCENT = 0.45;
    const YEAR_PERCENT = 0.67;

    const [totalIncome, setTotalIncome] = useState();
    var [tax, setTax] = useState();
    var [netIncome, setNetIncome] = useState();

    const [incomeType, setIncomeType] = useState();
    const [incomePeriod, setIncomePeriod] = useState();

    const [showComponent, setShowComponent] = useState('false');

    const handleSubmit = (event) => {
        event.preventDefault();
        showComponent: true;
        // Calculate tax
        // tax = totalIncome * TAX_39_PERCENT;
        // setTax(tax);
        // Calculate net income
        // netIncome = totalIncome - tax;
        // setNetIncome(netIncome);

        switch (incomePeriod) {
            case "Weekly":
                setTax(tax = totalIncome * WEEK_PERCENT);
                setNetIncome(netIncome = totalIncome * (1 - WEEK_PERCENT));
                
                break;
            case "Fortnigthly":
                setTax(tax = totalIncome * FORTH_PERCENT);
                setNetIncome(netIncome = totalIncome * (1 - FORTH_PERCENT));
                break;
            case "Monthly":
                setTax(tax = totalIncome * MONTH_PERCENT);
                setNetIncome(netIncome = totalIncome * (1 - MONTH_PERCENT));
                break;
            case "Annualy":
                setTax(tax = totalIncome * YEAR_PERCENT);
                setNetIncome(netIncome = totalIncome * (1 - YEAR_PERCENT));
                break;
            default:
            alert("Please choose income period!");
        }

       
       

        console.log('Total income:' + totalIncome);
        console.log('Income type:' + incomeType);
        console.log('Income period:' + incomePeriod);
    };


    const handleIncomeType = (event) => {
        setIncomeType(event.target.value);
    }

    const handleIncomePeriod = (event) => {
        setIncomePeriod(event.target.value);
    }
   


  

    return (

        <div className="overflow-hidden shadow sm:rounded-md">
            <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">

                            <label htmlFor="totalIncome" className="text-gray-700">
                                Total income
                            </label>
                            <div className="relative flex flex-col items-center group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
                                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">What is your total income?</span>
                                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                                </div>
                            </div>

                            <div className="relative mt-1 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="text-gray-500 sm:text-sm">$</span>
                                </div>
                                <input
                                    type="text"
                                    // value={totalIncome || ''}
                                    defaultValue=""
                                    name="totalIncome"
                                    id="totalIncome"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="0.00"
                                    onChange={(event) => {
                                        setTotalIncome(event.target.value)
                                    }}
                                />

                            </div>

                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="typeIncome" className="text-gray-700">
                                Income type
                            </label>
                            <div className="relative flex flex-col items-center group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
                                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Choose the income type.</span>
                                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                                </div>
                            </div>
                            <select
                                value={incomeType}
                                onChange={handleIncomeType}
                                id="incomeType"
                                name="incomeType"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                <option value="Gross_income">Gross income</option>
                                <option value="Net_income">Net income</option>
                            </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="periodIncome" className="text-gray-700">
                                Income period
                            </label>
                            <div className="relative flex flex-col items-center group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
                                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Choose the income period.</span>
                                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                                </div>
                            </div>
                            <select
                                value={incomePeriod}
                                onChange={handleIncomePeriod}
                                id="incomePeriod"
                                name="incomePeriod"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                <option value="Weekly">Weekly</option>
                                <option value="Fortnigthly">Fortnigthly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Annualy">Annualy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-16 py-3">
                    <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">
                        Calculate
                    </button>
                </div>
            </form>
            {showComponent && <input
                type="text"
                defaultValue={netIncome || ''}
                className="mt-1 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            /> }
            
            Your net

            {incomePeriod}

            income
           
            {/* <table className="table">
                <thead>
                    <tr>
                        <th>Frequency</th>
                        <th>Gross income</th>
                        <th>Tax</th>
                        <th>Net income</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Weekly</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                        <td>1975</td>
                    </tr>
                    <tr>
                        <td>Fortnigthly</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                        <td>1975</td>
                    </tr>
                    <tr>
                        <td>Monthly</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                        <td>1975</td>
                    </tr>
                    <tr>
                        <td>Annualy</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table> */}
           
        </div>

    )
}

export default Input;