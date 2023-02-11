import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import propTypes from "prop-types";

const RequestForm = ({ editing }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [originalTitle, setOriginalTitle] = useState("");
  const [body, setBody] = useState("");
  const [originalbody, setOriginalBody] = useState("");
  const [publish, setPublish] = useState(false);
  const [originalPublish, setOriginalPublish] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);

  useEffect(() => {
    if (editing) {
      axios.get(`http://localhost:3001/cigarrequest/${id}`).then((res) => {
        setTitle(res.data.title);
        setOriginalTitle(res.data.title);
        setBody(res.data.body);
        setOriginalBody(res.data.body);
        setPublish(res.data.publish);
        setOriginalPublish(res.data.publish);
      });
    }
  }, [id, editing]);

  const isEdited = () => {
    return (
      title !== originalTitle ||
      body !== originalbody ||
      publish !== originalPublish
    );
  };

  const goBack = () => {
    if (editing) {
      navigate(`/CigarRequest/${id}`);
    } else {
      navigate("/CigarRequest");
    }
  };

  const validateForm = () => {
    let validated = true;
    if (title === "") {
      setTitleError(true);
      validated = false;
    }
    if (body === "") {
      setBodyError(true);
      validated = false;
    }
    return validated;
  };

  const onSubmit = () => {
    setTitleError(false);
    setBodyError(false);
    if (validateForm()) {
      if (editing) {
        axios
          .patch(`http://localhost:3001/cigarrequest/${id}`, {
            title,
            body,
            publish,
          })
          .then((res) => {
            navigate(`/blogs/${id}`);
          });
      } else {
        axios
          .post("http://localhost:3001/cigarrequest", {
            title,
            body,
            publish,
            createdAt: Date.now(),
          })
          .then(() => {
            navigate("/CigarRequest");
          });
      }
    }
  };
  const onChangePublish = (e) => {
    setPublish(e.target.checked);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="container">
          <h1>{editing ? "Edit" : "Create"} </h1>
          <div className="mb-3">
            <label className="form-label">title</label>
            <input
              className={`form-control ${titleError ? "border-danger" : ""}`}
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            {titleError && (
              <div className="text-danger">텍스트를 입력해 주세요</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">body</label>
            <textarea
              className={`form-control ${bodyError ? "border-danger" : ""}`}
              rows={20}
              value={body}
              onChange={(event) => {
                setBody(event.target.value);
              }}
            />
            {bodyError && (
              <div className="text-danger ">텍스트를 입력해 주세요</div>
            )}
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={publish}
              onChange={onChangePublish}
            />

            <label className="form-check-label">Publish</label>
          </div>

          <button
            className="btn btn-primary"
            onClick={onSubmit}
            disabled={editing && !isEdited()}
          >
            {editing ? "Edit" : "Post"}
          </button>
          <button className="btn btn-primary ms-2" onClick={goBack}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

RequestForm.propType = {
  editing: propTypes.bool,
};

RequestForm.defaultProps = {
  editing: false,
};

export default RequestForm;
