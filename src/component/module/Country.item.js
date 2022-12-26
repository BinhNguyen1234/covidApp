
import CountryPopup from "./Country.popup"
import Style from "../../style/Country.module.sass"
export default function CountryItem({filter,dataCountry}){
    return <>
        <li id={Style.Item}>
            <div style={{"display": "flex","justifyContent": "space-between"}}>
                <CountryPopup CVData={{
                    TotalConfirmed: dataCountry.TotalConfirmed || 0,
                    TotalDeaths: dataCountry.TotalDeaths || 0,
                    }} code={dataCountry.CountryCode}>{dataCountry.Country}</CountryPopup>
                <div>{(dataCountry[filter]|| 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
           </div>
        </li>
    </>
}