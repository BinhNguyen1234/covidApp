import Style from "../../style/Country.module.sass"
import SearchBarDropDown from "./SearchBar.dropdown.filter"
export default function CountrySearchBar({AtoZ, showDropDown,filter ,dispatch}){
    return <>
       <form  onSubmit={e=>e.preventDefault()} id={Style.SearchBar}>
            <input placeholder="Enter country for searching" onChange={(e)=>{
                const invalid = /[°"§%()\[\]{}=\\?´`'#<>|,;.:+_-]+/g;
                const target = e.target
                const valid = target.value.replace(invalid,"")
                dispatch({type: "SEARCH",payload:{keySearch: valid}}); console.log(e.target.value)}
                }>
            </input>
            {/* <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Filter</button>
                <ul className="dropdown-menu">
                    <li htmlFor="TotalConfirmed" className="dropdown-item">
                    <label htmlFor="TotalConfirmed" className="form-check">
                        <input defaultChecked onChange={(e)=>{dispatch({type:"FILTER",payload:{filter:e.target.value}})}} value="TotalConfirmed" className="form-check-input" type="radio" name="Filter" id="TotalConfirmed"></input>
                        <label className="form-check-label" htmlFor="TotalConfirmed" >
                            Confirmed cases
                        </label>    
                    </label>
                        
                    </li>
                    <li htmlFor="TotalDeaths"  className="dropdown-item">
                    <label htmlFor="TotalDeaths" className="form-check">
                        <input  onChange={(e)=>{dispatch({type:"FILTER",payload:{filter:e.target.value}})}} value="TotalDeaths" className="form-check-input" type="radio" name="Filter" id="TotalDeaths"></input>
                        <label className="form-check-label" htmlFor="TotalDeaths" >
                            number of deaths
                        </label>
                    </label>
                    </li>
                    <li htmlFor="TotalRecovered" className="dropdown-item">
                    <label htmlFor="TotalRecovered" className="form-check">
                        <input  onChange={(e)=>{dispatch({type:"FILTER",payload:{filter:e.target.value}})}}  value="TotalRecovered"  className="form-check-input" type="radio" name="Filter" id="TotalRecovered"></input>
                        <label className="form-check-label" htmlFor="TotalRecovered" >
                            Recovered cases
                        </label>
                    </label>
                    </li>
                </ul> 
            </div> */}
            <div>
                <SearchBarDropDown showDropDown={showDropDown} dispatch={dispatch}></SearchBarDropDown>
                <button onClick={()=>{dispatch({type: "SORTING"})}}  >{AtoZ?"A-Z":"Z-A"}</button>
            </div>
       </form>
    </>
}