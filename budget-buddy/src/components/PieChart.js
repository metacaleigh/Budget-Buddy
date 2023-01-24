import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"

function PieChart({ amount, category, transaction }) {

    let categories = [...new Set(category)]

    let amounts = categories.map((category) => {
        let filteredTransaction = transaction.filter((transaction) => {
        return transaction.category === category
         })
        let sumOfTransactions = filteredTransaction.map((prop) => {
            return prop.amount
        })
        return sumOfTransactions.reduce((partialSum, a) => partialSum + Math.abs(a), 0)
    })

    
    
    // let array = [5, 5, 2]

    // console.log(array.reduce((partialSum, a) => partialSum + a, 0))

    ChartJS.register(ArcElement, Tooltip, Legend)

    const data = {
        labels: categories,
        datasets: [
          {
            label: '',
            data: amounts,
            backgroundColor: [
              '#b8e28a',
              '#a6cbb9',
              '#35b276',
              '#4e8f8a',
              '#124946',
              '#3e3a4e',
            ],
            borderColor: [
              'black'
            ],
            borderWidth: 1,
          },
        ],
      };
      
    return(
        <div>
            <Pie data={data} />
        </div>
    )
  }
  export default PieChart