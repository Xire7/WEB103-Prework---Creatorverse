import CreatorForm from "../components/CreatorForm";
const AddCreator = ({idCheck}) => {
    return <CreatorForm method='POST' ids={idCheck}/>
}

export default AddCreator;