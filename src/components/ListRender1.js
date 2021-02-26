import React from 'react'
import PersonList1 from './PersonList1'
function ListRender1() {
    const person=[
        {
            id:1,
            name:'sushant',
            age:28,
            skill:'reactjs'
        },
        {
            id:2,
            name:'anil',
            age:28,
            skill:'catia'
        },
        {
            id:3,
            name:'vishal',
            age:28,
            skill:'AI'
        }
    ]
    const list=person.map(x=> <PersonList1 key={x.id}  x={x}/>)
    return(
        <div>
            {list}
        </div>
    )
    
}
export default ListRender1

        //ListRender1 ->PersonList1