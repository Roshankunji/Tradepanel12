import { Bounce, ToastContainer } from "react-toastify"
import { Web3Provider } from "../context/WebContext"
import StoreProvider from "../context/StoreContext"

export const Provider = ({ children }) => {
    return(
        <Web3Provider>
            <StoreProvider>
                {children}
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    pauseOnFocusLoss={false}
                    newestOnTop={true}
                    closeOnClick
                    theme="dark"
                    transition={Bounce}
                    toastStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
                />
            </StoreProvider>
        </Web3Provider>
    )
}