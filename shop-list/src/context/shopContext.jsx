import {createContext, useContext} from "react";
import useShopReducer from "../reducer/useShopReducer.jsx";

const shopContext = createContext()


export const useShopContext = () => {
    return useContext(shopContext)
}

const ShopContextProvider = ({children}) => {

    const context = useShopReducer()

    return (
        <shopContext.Provider value={context}>
            {children}
        </shopContext.Provider>
    )
}

export default ShopContextProvider