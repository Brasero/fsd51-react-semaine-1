

function List({list}) {

    
    return (
        <>
            {
                list.map((item, index) => {
                    return <div key={index}>{item}</div>
                })
            }
        </>
    )
}

export default List;