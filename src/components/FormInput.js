import React, { Component } from 'react';

function FormInput({ handleChange, formInputData, handleSubmit }) {
    return (
        <div className="grid place-items-center">
            <form className="bg-white drop-shadow-xl rounded px-8 pt-6 pb-8 mt-6 mb-6">

                <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label htmlFor="totalIncome" className="absolute text-gray-700">
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
                                    <span className="text-gray-500">$</span>
                                </div>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={formInputData.totalIncome}
                                    name="totalIncome"
                                    id="totalIncome"
                                    placeholder="0.00"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-6 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 " />
                            </div>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="typeIncome" className="absolute text-gray-700">
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
                                onChange={handleChange}
                                value={formInputData.incomeType}
                                id="incomeType"
                                name="incomeType"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                            >
                                <option value="Gross_income">Gross income</option>
                                <option value="Net_income">Net income</option>
                            </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="periodIncome" className="absolute text-gray-700">
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
                                onChange={handleChange}
                                value={formInputData.incomePeriod}
                                id="incomePeriod"
                                name="incomePeriod"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                            >
                                <option value="Weekly">Weekly</option>
                                <option value="Fortnigthly">Fortnigthly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Annualy">Annualy</option>
                            </select>
                        </div>
                        <div className="col-span-2"></div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <button onClick={handleSubmit} className="bg-blue-500 w-full hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full" type="submit">
                                Calculate
                            </button>
                        </div>

                    </div>
                </div>

            </form>

        </div>
    )
}
export default FormInput;