import './DeleteModal.css';
import axios from 'axios';

function DeleteModal ({entity, entities, setEntities, setShowModal, label}) {

    let entityId;

    const baseURL = `http://localhost:8080/api/${label}`;

    async function deleteEmployee() {
        entityId = entity.id;
        try {
            await axios.delete(`${baseURL}/${entityId}`);
            setEntities(entities.filter((entity) => entity.id != entityId));
            setShowModal(false);
        } catch (error) {
            console.log(error);
        }
    };

    function handleYesClick() {
        deleteEmployee();
    }

    function handleNoClick() {
        setShowModal(false);
    }

    return (
        <div className="modalContainer">
            Are you sure you want to Delete this employee: {entity?.firstName} {entity?.lastName} {entity?.departmentName} ?
            <div className="actionsContainer">
                <button className="yesButton" onClick={() => handleYesClick()}>Yes</button>
                <button className="noButton" onClick={() => handleNoClick()}>No</button>
            </div>            
        </div>
    )
}

export default DeleteModal;