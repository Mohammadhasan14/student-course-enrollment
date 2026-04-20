import { useState } from "react";

interface ToDo {
  id: number;
  title: string;
  description: string
}

function App() {
  const [data, setData] = useState<ToDo[]>([])
  const [formData, setFormData] = useState<ToDo>({
    id: 0,
    title: "",
    description: ""
  })

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formData.id) {
      setData(data.map(d => d.id === formData.id ? formData : d))
    } else {
      setData(prev => ([...prev, { ...formData, id: Date.now() }]))
    }
    setFormData({
      id: 0,
      title: "",
      description: ""
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault()
    const { name, value } = e.target;
    console.log("dsfasdfasdf", name, value)
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleEdit = (id: number) => {
    const dataToUpdate = data.find((d) => d.id === id)
    if (!dataToUpdate) return alert("no matching data found!")
    setFormData(dataToUpdate)
  }

  const handleDelete = (id: number) => {
    setData(prev => prev.filter(d => d.id !== id))
  }

  return (<div className="parent">
    <div className="form_parents">
      <h1 className="title_form">ToDo list form</h1>
      <form className="form_ele" onSubmit={handleSubmit}>
        <label className="label_ele" htmlFor="title">Enter a title</label>
        <input className="input_ele" type="text" name="title" id="title" value={formData.title} onChange={handleChange} />
        <label className="label_ele" htmlFor="description">Enter a description</label>
        <textarea className="textarea_ele" name="description" id="description" value={formData.description} onChange={handleChange}></textarea>
        <button className="add_btn" type="submit">{formData.id ? "Update" : "Add"}</button>
      </form>
    </div>
    <div className="list_parents">
      <h1 className="title_list">ToDo list table</h1>
      <table className="table_ele">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? data.map(d => {
            return (<tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.title}</td>
              <td>{d.description}</td>
              <td>
                <div className="action_btns">
                  <button className="edit_btn" onClick={() => handleEdit(d.id)}>Edit</button>
                  <button className="delete_btn" onClick={() => handleDelete(d.id)}>Delete</button>
                </div>
              </td>
            </tr>)
          }) : <tr>
            <td colSpan={4}>No data found!</td>
          </tr>}
        </tbody>
      </table>
    </div>
  </div>)
}
export default App;