import React from 'react'
function PersonList({show}) {
    return(
        <div>
            <h2> {show.name} of age {show.age} knows {show.skill}</h2>
        </div>
    )
    
}
export default PersonList

        //with ListRender.js