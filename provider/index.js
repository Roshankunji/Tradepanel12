import { Web3Provider } from "../context/WebContext"

export const Provider = ({ children }) => {
    return(
        <Web3Provider>
            {children}
        </Web3Provider>
    )
}