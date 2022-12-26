import { createContext, useState } from "react"
import Style from "../../style/Country.module.sass"
import Popup from "./Country.Popup"
const DataContext = createContext({
    isCicked: false
})
export default function CountryPopup({children, CVData,code}){
    let [state,setState] = useState(false)
    return <>
    <DataContext.Provider value={{state, setState}} >
            <div id={Style.Popup} onClick={(event)=>{setState(true)}}>
                {children}
           </div>
           <Popup CVData={CVData} code={code}></Popup>
    </DataContext.Provider>
    </>
}
export {DataContext}