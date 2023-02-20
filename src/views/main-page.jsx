import { React, useEffect, useState } from 'react'

import { xxxService } from '../service/xxx-service'
import { XxxList } from '../cmps/xxx-list'

const MainPage = () => {

    const [xxxs, setXxx] = useState([])

    useEffect(() => {
        xxxService.query()
            .then(xxxs => {setXxx(xxxs)
                console.log(xxxs)
            })
    }, [])

    if (!xxxs|| !xxxs.length) return <div>Loading...</div>
    return (
        <section className="xxx-app">
            {/* <XxxFilter onChangeFilter={onChangeFilter} />
            <Link to='/xxx/edit'>Add Xxx</Link> */}
            <XxxList xxxs={ xxxs } />
        </section>
    )
}

export default MainPage
