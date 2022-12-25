import {useState} from "react"
import Style from "../../style/DropDownList.module.sass"
export default function SearchBarDropDown({showDropDown,dispatch}){

    return <>
    <div>
        <button type="button" id={Style.DropDownButton} onClick={(e)=>{dispatch({type:"TOGGLEDROPDOWN"})}}>
            Filter
        </button>
        <ul id={Style.DropDownList} style={{display: showDropDown?"flex":"none"}}>
            <li htmlForm="TotalConfirmed">
                <label htmlFor="TotalConfirmed" className="form-check">
                    <input defaultChecked onChange={(e)=>{dispatch({type:"FILTER",payload:{filter:e.target.value}})}} value="TotalConfirmed" className="form-check-input" type="radio" name="Filter" id="TotalConfirmed"></input>
                    <label className="form-check-label" htmlFor="TotalConfirmed" >
                        Confirmed cases
                    </label>    
                </label>
            </li>
            <li htmlForm="TotalDeaths">
                <label htmlFor="TotalDeaths" className="form-check">
                    <input  onChange={(e)=>{dispatch({type:"FILTER",payload:{filter:e.target.value}})}} value="TotalDeaths" className="form-check-input" type="radio" name="Filter" id="TotalDeaths"></input>
                        <label className="form-check-label" htmlFor="TotalDeaths" >
                            Number of deaths
                        </label>
                </label>
            </li>
            <li htmlForm="TotalRecovered">
                <label htmlFor="TotalRecovered" className="form-check">
                    <input  onChange={(e)=>{dispatch({type:"FILTER",payload:{filter:e.target.value}})}}  value="TotalRecovered"  className="form-check-input" type="radio" name="Filter" id="TotalRecovered"></input>
                    <label className="form-check-label" htmlFor="TotalRecovered" >
                        Recovered cases
                    </label>
                </label>
            </li>
        </ul>

    </div>
    </>
}