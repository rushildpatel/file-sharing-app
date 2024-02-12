import "../App.css";
import { useEffect, useRef, useState } from "react";
import { getSignedUrl } from "../services/api";

const Home = () => {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState("");

  const fileInputRef = useRef();

  useEffect(() => {
    const getData = async () => {
      const response = await getSignedUrl();
      setUrl(response.url);
    };
    getData();
  }, []);

  return (
    <div className="container">
      <h1>FileBin</h1>
      <p>Convenient file sharing in three steps without registration</p>

      <p>
        <span>1</span>
        <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={() => setFile(e.target.files)} />
        <button onClick={() => fileInputRef.current.click()}>Select Files to Upload</button>
        or drag-and-drop files into this browser window.{" "}
      </p>
      <p>
        <span>2</span> Wait until they complete.
      </p>
      <p>
        <span>3</span> The files will be available at <a href={url.split("?")[0]}>{url.split("?")[0]}</a> which is a link you can share.
      </p>

      <p className="info">The file uploads will cancel if you move away from this page before they complete. Uploaded files can be deleted manually at any time and will in any case be deleted automatically 6 days from now.</p>
    </div>
  );
};

export default Home;
