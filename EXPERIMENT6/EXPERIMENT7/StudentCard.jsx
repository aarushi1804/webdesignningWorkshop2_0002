functionStudentCard (props)
{
    return(
        <div> 
            <h2>Name:{props.name}</h2>
            <p> RollNO:{props.rollno}</p>
            <p> City:{props.city}</p>
            <p> Address:{props.address}</p>
            <p> BloodGroup:{props.bloodgroup}</p>
        </div>
    );
}
exportdefaultStudentCard;
