import { useState } from "react";
import axios from "axios";

function AddArticle() {
    let [name, setName] = useState("hi there");
    let [body, setBody] = useState("i am shivam");
    async function addArticle() 
    {
        let response = await axios.post("http://localhost:3001/addarticle", {
            name,
            body,
        });
        Swal.fire({
          title: 'Article Saved',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        setName('') 
        setBody('')
    }

    return (
      <div className="addarticle d-flex align-items-center">
        <form className="col-md-4 ms-auto me-auto">
            <h1 className="text-center">Add a new article</h1>
            <div className="mb-3">
                <input
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Article Name"
                />
            </div>

            <div className="mb-3">
                <textarea
                    onChange={(e) => setBody(e.target.value)}
                    className="form-control"
                    placeholder="Description"
                ></textarea>
            </div>
            <button
                onClick={addArticle}
                type="button"
                className="btn btn-warning text-white w-100"
            >
                Add
            </button>
        </form>
      </div>
    );
}

export default AddArticle;