import React, { Component } from 'react';
import Input from './Input';
import '../css/app.css';


export default function Main() {
    return (
        <div className="overflow-hidden grid place-items-center">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="title-app text-lg font-medium leading-6 text-gray-900">INCOME TAX CALCULATOR 2023</h3>
                <p className="title-text">Use our income tax calculator to estimate how much you'll owe in taxes. </p>
                <p className="title-text">Enter your income and other filing details to find out your tax burden for the year.</p>
                <Input />
            </div>
        </div>
    )
}
