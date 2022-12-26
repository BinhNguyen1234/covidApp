import { useContext, useEffect, useState } from "react"
import { DataContext } from "./Country.PopupBtn.js"
import Style from "../../style/Country.module.sass"
import axios from "axios"
import Chart from "./Chart"
//https://restcountries.com/v2/alpha/{code}
export default function Popup({code,CVData}){

    const {state,setState} = useContext(DataContext)
    const [data,setData]= useState({
        isLoading: true,
        name: "",
        population: "",
        capital: "",
        region: "",
        subregion: "",
        flags: {
            png: ""
        },
        
    })
    useEffect(()=>{
        if(state==true){axios({
            url: `https://restcountries.com/v2/alpha/${code}`,
            method: "get"
        }).then(({data})=>{
            let {name, population,capital,region,subregion,flags} = data
            setData({name,population,capital,subregion,region,flags, isLoading: false})
        }).catch((e)=>[
            console.log(e)
        ])}
        return ()=>{
            setData({
                isLoading: true,
                name: "",
                population: "",
                capital: "",
                region: "",
                subregion: "",
                flags: {
                    png: ""
                },
                
            })
        }
    },[state])
    return <>
    <div className={`${data.isLoading?"--skeleton":null}`} style={{display: state?"flex":"none","position":"absolute"}} id={Style.Unknown}>
        <button onClick={()=>{setState(false)}}>X</button>
        <img className={`${data.isLoading?"set":null}`} width="50%" height="50%" src={data.flags.png}></img>
        <div className={`${data.isLoading?"set":null}`}>Name: {data.name}</div>
        <div className={`${data.isLoading?"set":null}`}>Population: {data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <div className={`${data.isLoading?"set":null}`}>Capital: {data.capital}</div>
        <div className={`${data.isLoading?"set":null}`}>Region: {data.region}</div>
        <div className={`${data.isLoading?"set":null}`}>SubRegion {data.subregion}</div>
        <hr style={{"width": "100%", "height":"1px", backgroundColor:"black"}}></hr>
        {state?<Chart CVData={CVData} data={{Country:data.name}}></Chart>:null}
    </div>
            
    </>
}