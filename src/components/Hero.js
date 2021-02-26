import Rect from 'react';
function Hero({heroName}) {
    if(heroName==="jocker"){
        throw new Error("jocker is nt a hero")
    }
    return(
        <div>
            <h1>{heroName}</h1>
        </div>
    )
    
}
export default Hero;