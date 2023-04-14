import { useState } from "react";

//2nd tab education, both eviornment when edit button is clicked and when not
export default function Education() {
  const [data, setData] = useState({
    schoolname: "",
    studytitle: "",
    startdate: "",
    enddate: "",
    complete: false,
    editMode: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setData((prevState) => ({
      ...prevState,
      complete: true,
      editMode: false,
    }));
  };

  if (data.complete) {
    if (data.editMode) {
      return (
        <div>
          <hr />

          <div className="education--container">
            <form onSubmit={handleSubmit}>
              <label className="subtitle">Education</label>
              <br />
              <br />
              <input
                onChange={handleChange}
                name="schoolname"
                type="text"
                placeholder="School Name"
                value={data.schoolname}
              />
              <input
                onChange={handleChange}
                name="studytitle"
                type="text"
                placeholder="Title of study"
                value={data.studytitle}
              />

              <div className="start--date">
                <label>Start</label>
                <input
                  onChange={handleChange}
                  name="startdate"
                  type="date"
                  placeholder="Start"
                  value={data.startdate}
                />
              </div>

              <div className="end--date">
                <label>End</label>
                <input
                  onChange={handleChange}
                  name="enddate"
                  type="date"
                  placeholder="End"
                  value={data.enddate}
                />
              </div>

              <button className="printPageButton" type="submit">
                Save
              </button>
              <br />
              <br />
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="saved--info">
          <hr />
          <h3>Education</h3>
          <br />
          <p>
            <span>Name of Institution: </span>
            {data.schoolname}
          </p>
          <p>
            <span>Degree Achieved: </span>
            {data.studytitle}
          </p>
          <p>
            <span>Start Date: </span>
            {data.startdate}
          </p>
          <p>
            <span>End Date: </span>
            {data.enddate}
          </p>

          <button
            className="edit--btn printPageButton"
            onClick={() =>
              setData((prevState) => ({
                ...prevState,
                editMode: true,
              }))
            }
          >
            Edit
          </button>
        </div>
      );
    }
  } else {
    return (
      <div>
        <hr />

        <div className="education--container">
          <form onSubmit={handleSubmit}>
            <label className="subtitle">Enter Your Previous Education:</label>
            <br />
            <br />
            <input
              onChange={handleChange}
              name="schoolname"
              type="text"
              placeholder="University/College"
            />
            <input
              onChange={handleChange}
              name="studytitle"
              type="text"
              placeholder="Degree Achieved"
            />

            <div className="start--date">
              <label>Start Date:</label>
              <input
                onChange={handleChange}
                name="startdate"
                type="date"
                placeholder="Start"
              />
            </div>

            <div className="end--date">
              <label>End Date:</label>
              <input
                onChange={handleChange}
                name="enddate"
                type="date"
                placeholder="End"
              />
            </div>

            <button className="printPageButton" type="submit">
              Save
            </button>
            <br />
            <br />
          </form>
        </div>
      </div>
    );
  }
}
