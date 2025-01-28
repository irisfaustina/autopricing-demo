import { ReactNode } from "react";

export function MarketingLayout({children}: {
    children: ReactNode}){
        return <div className="selection:bg-[hsl(320,65%,52%,20%)]">
            <NavBar />
            {children}
        </div>
    
}