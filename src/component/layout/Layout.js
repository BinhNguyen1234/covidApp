import Bar from "./Bar"
import MainContent from "./MainContent"
export default function FullLayout ({children}){
    return <>
        <Bar></Bar>
        <MainContent>
            {children}
        </MainContent>
    </>
}