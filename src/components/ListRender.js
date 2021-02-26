import React from 'react'
import PersonList from './PersonList'
function ListRender() {
    // const names=['sush','vishal','anil']
    const person=[
        {
            id:1,
            name:'sushant',
            age:28,
            skill:'reactjs'
        },
        {
            id:2,
            name:'vishal',
            age:28,
            skill:'AI'
        },
        {
            id:3,
            name:'anil',
            age:29,
            skill:'catia'
        }
    ]
    const nameList=person.map(show=> <PersonList key={show.id} show={show} />  )
    return(
        <div>
            {nameList}
        </div>
    )
    
}
export default ListRender

        //List and keys