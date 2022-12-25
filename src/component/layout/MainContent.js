import CountryList from "../module/Country.list.js"
import Style from "../../style/Layout.Bar.module.sass"
export default function MainContent({children}){
    return <>
        <div id={Style.MainContent}>
            <CountryList></CountryList>
        </div>
    </>
}