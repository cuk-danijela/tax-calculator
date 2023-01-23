import React, { Component } from 'react';
import '../css/app.css';
import TableView from './TableView';

export default function Main() {
    return (
        <>
            <div className="overflow-hidden grid place-items-center">
                <div className="px-4 py-5 sm:px-6 text-center">
                    <h3 className="title-app text-lg font-medium leading-6 text-gray-900">INCOME TAX CALCULATOR 2023</h3>
                    <p className="text-lg">Use our income tax calculator to estimate how much you'll owe in taxes. </p>
                    <p className="text-lg">Enter your income and other filing details to find out your tax burden for the year.</p>
                </div>
            </div>
            <TableView />
            <p className="text-center text-gray-500 text-xs mt-6">
                &copy;2023 Cuk Danijela | All rights reserved.
            </p>
        </>
    )
}
