import axios from "axios"
import CountrySearchBar from "./Country.SearchBar"
import { useEffect, useReducer } from "react"
import CountryItem from "./Country.item"
import Style from "../../style/Country.module.sass"
function reducer(state, actions){
    switch(actions.type){
        case "SETDATA":{
            return {...state,isLoading: false,data: actions.payload.data,displayData :actions.payload.data}
        }
        case "SORTING":{
            state.displayData.sort((a,b)=>{return state.AtoZ ? b[state.filter] - a[state.filter] : a[state.filter] - b[state.filter]})
            return {...state, AtoZ: state.AtoZ?false:true}
        }
        case "FILTER": {
            return {...state,isDropDownShow: false,filter: actions.payload.filter}
        }
        case "SEARCH": {
             let searchData = state.data.filter((value)=>{return value.Country.search(new RegExp(`${actions.payload.keySearch}(.*)`, 'gmius'))>=0})
            return {...state, displayData : searchData}
        }
         case "TOGGLEDROPDOWN": {
            return {...state, isDropDownShow: state.isDropDownShow?false:true}
         }
        default :{
            return {...state}
        }
    }
}


export default function CountryList(){
    const [state, dispatch] = useReducer(reducer,{
        filter: "TotalConfirmed",
        sort: true,
        keySerach: "",
        isLoading: true,
        data: [],
        displayData: [],
        isDropDownShow: false
    })
    
    useEffect(()=>{
        //TotalConfirmed,TotalDeaths,TotalRecovered
        axios({
            url: "https://api.covid19api.com/summary",
            method: "get"
        }).then((response)=>{
            dispatch({type: "SETDATA", payload:{data: response.data.Countries || []}})
            if(response.data.Message){
                dispatch({type: "SETDATA", payload:{data:[{Country: "Caching data processing, please try few minutes later"}]  || []}})
            }
        })
        .catch((e)=>{
            alert(e)
        })

    },[])

    return <>
        <CountrySearchBar filter={state.filter} dispatch={dispatch} showDropDown={state.isDropDownShow} AtoZ={state.AtoZ}></CountrySearchBar>
        {state.isLoading?"Waiting":<ul id={Style.List}>
            <div  style={{"display": "flex","justifyContent": "space-between"}}>
                <div>Country</div>
                <hr style={{width: "1px", height: "100%"}}></hr>
                <div>{state.filter}</div>
            </div>
            <hr style={{margin: "1em"}}></hr>
           {state.displayData.map((dataCountry,index)=>{
                return  <CountryItem key={index} filter={state.filter} dataCountry={dataCountry}></CountryItem>
            })}
        </ul>}
    </>
}