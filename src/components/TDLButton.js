function TDLButton({ label, icon, color, callback }) {

    return (<div className="TDLButton" style={{color:color}}>
        <span className="material-symbols-rounded" onClick={()=>callback()}>
            {icon}
        </span>
        <span>
            {label}
        </span>
    </div>);
}

export default TDLButton;