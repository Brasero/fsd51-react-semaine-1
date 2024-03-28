import {useTodoContext} from "../../context/todoContext.jsx";
import CategorieItem from "../CategorieItem/index.jsx";

const CategorieList = () => {

    const {state: {categories}} = useTodoContext()

    return (
        <div>
            <h5>Vos catégories</h5>
            <div style={{display: "flex", justifyContent: "center", gap: '10px'}}>
                {
                    categories.length > 0 ?
                        categories.map(cat => {
                            return <CategorieItem key={cat.id} cat={cat} />
                        })
                        :
                        <span>Aucune catégorie</span>
                }
            </div>
        </div>
    );
};

export default CategorieList;