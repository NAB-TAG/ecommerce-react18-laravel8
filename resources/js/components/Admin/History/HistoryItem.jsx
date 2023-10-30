const HistoryItem = ({ history }) => {
    return(
        <div className="history-admin__content--item">
            <div className="history-admin__content--item-date">
                <p>01/09/23</p>
                <span>01:01</span>
            </div>

            <div className="history-admin__content--item-color dark" ></div>

            <div className="history-admin__content--item-text">
                <p className="m-0">El producto #XF-1203 no cumple con las normas de seguridad establecias.</p>
            </div>
        </div>
    );
}

export default HistoryItem;
