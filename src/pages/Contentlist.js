import React from "react";
import Content from "../components/Content";

export default function Contentlist() {
  const [content, setContent] = React.useState([]);

  async function fetchContent() {
    const response = await fetch(" http://localhost:3006/results");
    const data = await response.json();
    setContent(data);
    console.log(data);
  }

  React.useEffect(() => {
    fetchContent();
  }, []);
  return (
    <div>
      {content.map(article => (
        <Content
          key={article.id}
          category={article.category}
          headline={article.headline}
          paragraph={article.paragraph}
          rating={article.rating}
        />
      ))}
    </div>
  );
}
