import React from 'react';
import { calculateInvestmentResults } from '../util/investment';
import { formatter } from '../util/investment';


function Result({userInput}) {
    const resultData = calculateInvestmentResults(userInput);
    const yearlyData = [];
    let currentSavings = +userInput.initialInvestment;
    


   
  return (
    <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
                
            </tr>
        </thead>
        <tbody>
            {resultData.map((yearData) => (
                <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(yearData.valueEndOfYear - userInput.initialInvestment - yearData.annualInvestment * yearData.year)}</td>
                    <td>{formatter.format(userInput.initialInvestment + yearData.annualInvestment * yearData.year)}</td>
                </tr>
            ))}
        </tbody>
        </table>
   
   

   

    

  )
}

export default Result