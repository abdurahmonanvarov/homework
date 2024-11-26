import { useState } from "react"

function FormList({data}) {

    const [form, setForm] = useState(false);

    const closeModal = (e) => {
       console.log(e);
       
    }

    return (
        <div className="form">

            <button className="form__show" onClick={() => setForm(true)}>Show form</button>
            {form && (
                <div className="form__infos">
                    <h2>Foydalanuvchi Ma'lumotlari</h2>
                    <form className="form__malumot">
                        <div>
                        <span>Img url:</span>
                        <input type="url" value={data} />
                        </div>
                        <div>
                        <span>Name:</span>
                        <input type="text" value={data} />
                        </div>
                        <div>
                        <span>Age:</span>
                        <input type="number" value={data} />
                        </div>
                        <div>
                        <span>Job:</span>
                        <input type="text" value={data} />
                        </div>
                        <div>
                        <span>Country:</span>
                        <input type="text" value={data} />
                        </div>
                        <button onClick={closeModal}>Submit</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default FormList