
function Main({ data, setData }) {


    const deletButton = (id) => {
        const upgrate = data.filter((data) => data.id != id)
        setData(upgrate)
    }
    return (
        <div className="main">
            {data.map((data) => {
                return (
                    <div key={data.id} className="main__info">
                        <img src={data.url} alt="" />
                        <h5>Name: <span>{data.name}</span></h5>
                        <h5>Age: <span>{data.age}</span></h5>
                        <h5>Job: <span>{data.job}</span></h5>
                        <h5>Country: <span>{data.fromm}</span></h5>
                        <button onClick={() => deletButton(data.id)}>Delet</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Main