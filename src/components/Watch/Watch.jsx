

// eslint-disable-next-line react/prop-types
const Watch =  ({watch}) => {

    

    return (
        <div>
            
            <h1> name: {watch?.model} </h1>
            <h2> price: {watch?.price}</h2>
            <h3> brand: {watch?.brand} </h3>
            
        </div>
       
    );
};

export default Watch;