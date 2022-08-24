import Header from "./Header/Header";
import TextArea from "./TextArea";
import InpuBox from "./InputBox";
import axios from "axios";
import { useState } from "react";
import TagContainer from "./TagContainer";
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [tagList, setTagList] = useState([]);
  let navigate = useNavigate();
  function handleKeypress(event) {
    const whiteSpace = event.target.value.trim();
    if (event.key === "Enter") {
      const filtered = tagList.filter((tag) => tag === event.target.value);
      if (filtered.length === 0 && whiteSpace !== "") {
        setTagList([...tagList, event.target.value]);
        event.target.value = "";
      }
    }
  }
  function handleClick(event) {
    setTagList([...tagList.filter((tag) => tag !== event.target.id)]);
  }
  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const jwt = sessionStorage.getItem("token");
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/api/articles`,
        headers: { Authorization: `Bearer ${jwt}` },
        data: {
          article: {
            title,
            description,
            body,
            tagList,
          },
        },
      });
      setTitle("");
      setDescription("");
      setBody("");
      setTagList([]);

      navigate("/");
    } catch (e) {
      if (e.response.status == 422) {
        throw new Error({
          errors: {
            body: ["can't be empty"],
          },
        });
      }
    }
  }
  return (
    <div>
      <Header />
      <form className="mx-[30%] mt-4 flex flex-col">
        <InpuBox
          placeholder="Article Title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <InpuBox
          placeholder="What is the article about?"
          onChange={(event) => setDescription(event.target.value)}
        />
        <TextArea
          placeholder="Write your article (in markdown)"
          name="body"
          rows="4"
          onChange={(event) => {
            setBody(event.target.value);
          }}
        />
        <InpuBox
          placeholder="Enter tags (press enter to add)"
          onKeyPress={handleKeypress}
        />
        <div className="flex flex-wrap">
          {tagList.map((tag, index) => (
            <TagContainer key={index} tag={tag} onClick={handleClick} />
          ))}
        </div>
        <SubmitButton
          onClick={handleSubmit}
          message="Publish Article"
          type="button"
        />
      </form>
    </div>
  );
}

export default NewPostPage;
