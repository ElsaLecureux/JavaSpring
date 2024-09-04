import './DeleteModal.css';

function DeleteModal () {

    function handleYesClick() {
        console.log('yes');
    }

    function handleNoClick() {
        console.log('no');
    }

    return (
        <div className="modalContainer">
            Are you sure you want to Delete?
            <div className="actionsContainer">
                <button className="yesButton" onClick={() => handleYesClick()}>Yes</button>
                <button className="noButton" onClick={() => handleNoClick()}>No</button>
            </div>            
        </div>
    )
}

export default DeleteModal;