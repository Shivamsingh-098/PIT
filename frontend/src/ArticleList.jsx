import axios from "axios";
import { useEffect, useState } from "react";

function ArticleList() {

const [articles, setArticles] = useState([]);

useEffect(() => {
    const getArticles = async () => {
        try {
            let response = await axios.get("http://localhost:3001/");
            setArticles(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    };
    getArticles();
}, []);

return (
    <div className="row">
        {articles && articles.map((article, index) => (
            <div className="col-md-4" key={index}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{article.name}</h5>
                        <p className="card-text">{article.body}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  );
}

export default ArticleList;