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

                <select>
                <option value="volve">USD</option>
                
                </select>
                </div>
                </div>
        </div>
    )
}