function TDLButton({ label, icon, color,callback }) {

    return (<div className="TDLButton" style={{color:color}} onClick={()=>callback()}>
        <span className="material-symbols-rounded">
            {icon}
        </span>
        <span>
            {label}
        </span>
    </div>);
}

export default TDLButton;