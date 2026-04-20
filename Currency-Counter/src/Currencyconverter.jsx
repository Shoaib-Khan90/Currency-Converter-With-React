import logo from './currency.jpg'
import './Currency.css'
import { useState,useEffect} from 'react'
import axios from 'axios'

export default function Currencyconverter(){

    const [amount , setAmount] = useState("0")
    const [fromCurrency , setFromCurrency] = useState("USD")
    const [toCurrency , setToCurrency] = useState("PKR")
    const [convertedAmount , setConvertedAmount] = useState(null)
    const [exchangeRates , setExchangeRates] = useState({});

    useEffect(() =>{
        const apiUrl = `https://v6.exchangerate-api.com/v6/a41933d65651c81305353175/latest/${fromCurrency}`
        axios.get(apiUrl)
        .then(
            response =>{
                setExchangeRates(response.data.conversion_rates)
            }
        )

        .catch(error =>{
            console.log(error)
        })
    },[fromCurrency])

    useEffect(() =>{
        const ConversionRate = exchangeRates[toCurrency]
        if(ConversionRate){
            const converted = amount * ConversionRate
            setConvertedAmount(converted.toFixed(2))
        }
    }, [fromCurrency,amount,toCurrency,exchangeRates])




    const handleChange = (e) => {
        const {name , value } = e.target;
        switch(name){
            case 'amount':
            setAmount(value)
            break

            case 'fromCurrency':
                setFromCurrency(value)
                break

            case 'toCurrency':
                setToCurrency(value)
                break
        }
    }
    return(
        <div className='App'>
                <img src={logo} width="60px"   alt="test" />
                <h1>Currency Converter</h1>
                <div className='main'>
                    <div className='form'>
                <form style={{backgroundColor:"white"}}>
                    <label >Amount :</label>
                    <input name='amount' value={amount} type="number" placeholder='Enter the amount' onChange={handleChange}/>
                </form>
                </div>
                <div className='change'>
                    <label>From Currency :</label>
                <select name='fromCurrency' value={fromCurrency} onChange={handleChange} size="1"> 
                 {
                    Object.keys(exchangeRates).map(currency => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))
                 }   
                </select>
                </div>

                 <div className='change'>
                    <label>To Currency :</label>
                <select name='toCurrency' value={toCurrency} onChange={handleChange} size="1">
                 {
                    Object.keys(exchangeRates).map(currency => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))
                 }   
                </select>
                </div>
                </div>
                <h2 className='h2'>Converted amount : {convertedAmount} </h2>
        </div>
    )
}