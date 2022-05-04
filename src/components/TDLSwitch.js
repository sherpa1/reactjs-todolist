import './Switch.css';

function TDLSwitch({ initialValue,callback }) {

    function onChange(){
        callback(initialValue ? false : true);
    }

    return (
        <label className="switch">
            <input type="checkbox" value={initialValue} onChange={()=>onChange()} />
            <span className="slider round"></span>
        </label>
    );
}

export default TDLSwitch;