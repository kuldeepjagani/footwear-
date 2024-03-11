import React, { useEffect, useState } from 'react'
// import { message } from "antd";


const Freeapi = () => {

    const [todo, setTodo] = useState()

    const url = 'https://api.freeapi.app/api/v1/public/randomusers'
    const fetchInfo = () => {
        fetch(url)
            .then((res) => res.json())
            .then((d) => setTodo(d))
    }

    console.log(todo)

    useEffect(() => {
        fetchInfo();
    }, [])
    return (
        <div>

            {
                // todo.map((item, index) => (

                //     <h1>{item.title}</h1>
                // ))
            }
        </div>
    )
}

export default Freeapi
