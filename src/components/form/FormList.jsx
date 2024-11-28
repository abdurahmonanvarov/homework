import { useState } from "react";

function FormList({ setData }) {
  const [form, setForm] = useState(false);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [fromm, setFormm] = useState("");


  const closeModal = (e) => {
    e.preventDefault();

    if (!url.trim() || !name.trim() || !age.trim() || !job.trim() || !fromm.trim()) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    setData((prev) => [
      ...prev,
      {
        id: Math.random(),
        url,
        name,
        age,
        job,
        fromm,
      },
    ]);

    setForm(false); 
    setUrl("")
    setName("")
    setAge("")
    setFormm("")
    setJob("")
  };

  return (
    <div className="form">
      <button className="form__show" onClick={() => setForm(true)}>
        Show form
      </button>
      {form && (
        <div className="form__infos">
          <h2>Foydalanuvchi Ma'lumotlari</h2>
          <form className="form__malumot">
            <div>
              <span>Img url:</span>
              <input
                onChange={(e) => setUrl(e.target.value)}
                type="url"
                value={url}
              />
            </div>
            <div>
              <span>Name:</span>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
              />
            </div>
            <div>
              <span>Age:</span>
              <input
                onChange={(e) => setAge(e.target.value)}
                type="number"
                value={age}
              />
            </div>
            <div>
              <span>Job:</span>
              <input
                onChange={(e) => setJob(e.target.value)}
                type="text"
                value={job}
              />
            </div>
            <div>
              <span>Country:</span>
              <input
                onChange={(e) => setFormm(e.target.value)}
                type="text"
                value={fromm}
              />
            </div>
            <button onClick={closeModal}>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default FormList;
