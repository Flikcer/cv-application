import { useState } from "react";

export default function Experience() {
  const [data, setData] = useState({
    companyname: "",
    positiontitle: "",
    tasks: "",
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

          <div className="experience--container">
            <form onSubmit={handleSubmit}>
              <label className="subtitle">Experience</label>
              <br />
              <br />
              <input
                onChange={handleChange}
                name="companyname"
                type="text"
                placeholder="Company Name"
                value={data.companyname}
              />
              <input
                onChange={handleChange}
                name="positiontitle"
                type="text"
                placeholder="Position Title"
                value={data.positiontitle}
              />
              <input
                onChange={handleChange}
                name="tasks"
                type="text"
                placeholder="Main tasks of your job"
                value={data.tasks}
              />

              <div className="start--date">
                <label>Start Date:</label>
                <input
                  onChange={handleChange}
                  name="startdate"
                  type="date"
                  placeholder="Start"
                  value={data.startdate}
                />
              </div>

              <div className="end--date">
                <label>End Date:</label>
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
        <div className="saved--info experience--div">
          <hr />
          <h3>Relevant Experience</h3>
          <br />
          <p>
            <span>Company Name: </span>
            {data.companyname}
          </p>
          <p>
            <span>Position: </span>
            {data.positiontitle}
          </p>
          <p>
            <span>Skills: </span>
            {data.tasks}
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

        <div className="experience--container">
          <form onSubmit={handleSubmit}>
            <label className="subtitle">Enter Your Relevant Experience:</label>
            <br />
            <br />
            <input
              onChange={handleChange}
              name="companyname"
              type="text"
              placeholder="Company"
            />
            <input
              onChange={handleChange}
              name="positiontitle"
              type="text"
              placeholder="Position Held"
            />
            <input
              onChange={handleChange}
              name="tasks"
              type="text"
              placeholder="Skills Used"
            />

            <div className="start--date">
              <label>Start Date:</label>
              <input
                onChange={handleChange}
                name="startdate"
                type="date"
                placeholder="Start Date:"
              />
            </div>

            <div className="end--date">
              <label>End Date:</label>
              <input
                onChange={handleChange}
                name="enddate"
                type="date"
                placeholder="End Date:"
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
