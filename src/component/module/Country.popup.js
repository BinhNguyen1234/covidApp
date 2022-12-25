import { createContext, useState } from "react"
import Style from "../../style/Country.module.sass"
import Unknown from "./Country.unknow"
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
           <Unknown CVData={CVData} code={code}></Unknown>
    </DataContext.Provider>
    </>
}
export {DataContext}