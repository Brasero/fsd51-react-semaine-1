import {useEffect, useRef, useState} from "react";

const Input = () => {

    const [value, setValue] = useState({
        name: '',
        surname: ''
    })

    const [submitValue, setSubmitValue] = useState({
        name: '',
        surname: ''
    })
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        const {value: targetValue, name} = e.target
        const regex = /^[a-zA-Z]+$/
        if(!regex.test(targetValue) && targetValue.length !== 0) {
            return
        }
        setValue({
            ...value,
            [name]: targetValue
        })
    }

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault()
        if (value.name !== "" && value.surname !== '') {
            setSubmitValue(value)
            setValue({
                name: "",
                surname: ""
            })
            setMessage('')
        } else {
            setMessage("Merci de remplir tout les champs")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type={'text'} name={'name'} placeholder={'Nom'} onChange={handleChange} value={value.name}/>
                <input type={'text'} name={'surname'} placeholder={'Prénom'} onChange={handleChange}
                       value={value.surname}/>
                <input type={'submit'} value={'ok'}/>
            </form>
            {
                message !== "" && <span>{message}</span>
            }
            {
                submitValue.name !== "" && <div>
                    <div>name : {submitValue.name}</div>
                    <div>surname: {submitValue.surname}</div>
                </div>
            }
        </>
    )
}


export default Input;