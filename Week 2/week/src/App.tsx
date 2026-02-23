import './App.css'
import StockCard from './components/StockCard'
import { stocks } from './data/stockData'

import DataTable from './components/DataTable'
import type { Stock } from './types/stock.types'
function App() {
  return (
    <div>
      <StockCard stock = {stocks[0]} />
      
      <DataTable<Stock> data={stocks}  rowKey="id" columns={[
         {key : 'symbol',header : 'Symbol'},
         {key : 'price',header : 'Price',
           render : (val) => `$${Number(val).toFixed(2)}`
         },
         {key : 'changePct',header:'Change %',
           render : (val) =>{
            const n=Number(val);
            return <span style={{color: n>=0 ? 'green' : 'red'}}>
              {n>=0 ? '+' : ''} {n.toFixed(2)}%
            </span>
           }
         }
      ]

      } />
     
    </div>
  )
}

export default App
