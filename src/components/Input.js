import React, { Component } from 'react';

export default function Input() {
    return (
        <div className="">
            <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                               
                                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                        Total income 
                                    </label>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                               
                                    <div className="relative mt-1 rounded-md shadow-sm">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <span className="text-gray-500 sm:text-sm">$</span>
                                        </div>
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="0.00"
                                        />
                                        
                                    </div>
                                
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Income type
                                </label>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option>Gross income</option>
                                    <option>Net income</option>
                                </select>
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Income period
                                </label>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option>Weekly</option>
                                    <option>Fortnigthly</option>
                                    <option>Monthly</option>
                                    <option>Annualy</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Calculate
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}