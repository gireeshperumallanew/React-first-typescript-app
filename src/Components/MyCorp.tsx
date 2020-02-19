import * as React from 'react'

type MyCorpProps = {
    name1: string
}

const MyCorp = (props: MyCorpProps) => {
    return (
        <div>
            <p>--------  first Props From functional Component ----------</p>
            <h1>{props.name1}</h1>
        </div>
    )
}


export default MyCorp;