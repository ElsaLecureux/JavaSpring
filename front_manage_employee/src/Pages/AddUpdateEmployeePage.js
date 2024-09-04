function AddUpdateEmployeePage () {
    return (
        <div className="PageContainer">
            <form>
                <label>
                    Employee First Name:
                    <input type="text">
                    </input>
                </label>
                <label>
                    Employee Last Name:
                    <input type="text">
                    </input>
                </label>
                <label>
                    Employee Email:
                    <input type="text">
                    </input>
                </label>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default AddUpdateEmployeePage;