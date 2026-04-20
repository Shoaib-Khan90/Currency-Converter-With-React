import logo from './currency.jpg'
import './Currency.css'
export default function Currencyconverter(){
    return(
        <div className='App'>
                <img src={logo} width="60px"   alt="test" />
                <h1>Currency Converter</h1>
                <div className='main'>
                    <div className='form'>
                <form style={{backgroundColor:"white"}}>
                    <label>Amount :</label>
                    <input type="number" placeholder='Enter the amount' />
                </form>
                </div>
                <div className='change'>
                    <label>From Currency :</label>
                <select size="1">
                <option value="volve">USD</option>
                <option value="volve">PKR</option>
                <option value="volve">INR</option>
                <option value="volve">EUR</option>
                <option value="volve">GBP</option>
                <option value="volve">AED</option>
                <option value="volve">SAR</option>
                <option value="volve">JPY</option>
                <option value="volve">CNY</option>
                <option value="volve">AUD</option>
                <option value="volve">CAD</option>
                <option value="volve">CHF</option>
                <option value="volve">TRY</option>
                <option value="volve">QAR</option>
                <option value="volve">KWD</option>
                <option value="volve">OMR</option>
                <option value="volve">BHD</option>
                <option value="volve">MYR</option>
                <option value="volve">SGD</option>
                <option value="volve">THB</option>
                <option value="volve">KRW</option>
                <option value="volve">RUB</option>
                <option value="volve">ZAR</option>
                <option value="volve">BRL</option>
                <option value="volve">NZD</option>
                <option value="volve">HKD</option>
                <option value="volve">SEK</option>
                <option value="volve">NOk</option>
                <option value="volve">DKk</option>
                <option value="volve">EGP</option>
                </select>
                </div>

                 <div className='change'>
                    <label>To Currency :</label>
                <select size="1">
                <option value="volve">USD</option>
                <option value="volve">PKR</option>
                <option value="volve">INR</option>
                <option value="volve">EUR</option>
                <option value="volve">GBP</option>
                <option value="volve">AED</option>
                <option value="volve">SAR</option>
                <option value="volve">JPY</option>
                <option value="volve">CNY</option>
                <option value="volve">AUD</option>
                <option value="volve">CAD</option>
                <option value="volve">CHF</option>
                <option value="volve">TRY</option>
                <option value="volve">QAR</option>
                <option value="volve">KWD</option>
                <option value="volve">OMR</option>
                <option value="volve">BHD</option>
                <option value="volve">MYR</option>
                <option value="volve">SGD</option>
                <option value="volve">THB</option>
                <option value="volve">KRW</option>
                <option value="volve">RUB</option>
                <option value="volve">ZAR</option>
                <option value="volve">BRL</option>
                <option value="volve">NZD</option>
                <option value="volve">HKD</option>
                <option value="volve">SEK</option>
                <option value="volve">NOk</option>
                <option value="volve">DKk</option>
                <option value="volve">EGP</option>
                </select>
                </div>
                </div>
        </div>
    )
}