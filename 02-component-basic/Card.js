function Card(){
    const title = "This is a card"
    const name = "Ami"
    const sale = true

    return(
        <div className="row">
            <div className="col s2">
                <div className="card small">
                    <div className="card-image">
                        <img src="https://picsum.photos/200/300" />
                    </div>
                    <div className="card-content">
                        <p>{title}</p>
                        <p>{name}</p>
                    </div>
                    <div className="card-action">
                        {sale ? '$1.99' : '$9.99'}
                    </div>
                </div>
            </div>
        </div>
    )
}