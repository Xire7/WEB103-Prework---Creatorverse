import classes from "./css/CreatorCard.module.css"


const CreatorCard = ({name, imageURL}) => {
    return (
        <div className={classes.card}>
            <img src={imageURL}/>
            <p>{name}</p>
        </div>
    );
}

export default CreatorCard;