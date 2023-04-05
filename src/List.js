import React from "react";
export default function List(props) {
  const { people } = props;
  return (
    <div>
      <div className="list-container">
        {people.map((person) => (
          <div className="list-items" key={person.id}>
            <div className="image-container">
              <div>
                <img
                  className="image-item"
                  src={person.image}
                  width="100px"
                  height="100px"
                  alt=""
                />
              </div>
            </div>
            <div className="items-details">
              <div className="items-details-title">{person.name}</div>
              <div className="items-details-age">{person.age} years</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
