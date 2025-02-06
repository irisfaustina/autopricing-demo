import { ReactNode } from "react";

export default function MarketingLayout({children}: {
    children: ReactNode}){
        return (
        <html>
            <body>
            <div className="selection:bg-[hsl(320,65%,52%,20%)]">
                { /*<NavBar />*/}
                asdfasdf
                    {children}
                </div>
            </body>
        </html>
    )
}