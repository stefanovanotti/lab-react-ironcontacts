import React from "react";
import MyButton from "./MyButton";

export default function UserCard({ infos, handleDelete }) {
  return (
    <tr>
      <th>
        <img src={infos.pictureUrl} alt="" />
      </th>
      <th>{infos.name}</th>
      <th>{infos.popularity}</th>
      <th>
        <button
          onClick={() => handleDelete(infos)}
          text="Delete this contact"
          param={this}
        >
          Delete this contact
        </button>
      </th>
    </tr>
  );
}
