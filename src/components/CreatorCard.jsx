import classes from "./css/CreatorCard.module.css"


const CreatorCard = ({name, imageURL, description}) => {
    return (
        <div className={classes.card}>
            <img src={imageURL}/>
            <p>{name}</p>
            <p className={classes.desc}>{description}</p>
        </div>
    );
}

export default CreatorCard;