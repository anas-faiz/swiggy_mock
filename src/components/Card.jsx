const Card = ({ name, description, price, rating, image }) => {

    const imageapi = import.meta.env.VITE_IMAGE_KEY;

    return (
    <div className="card">
      <img src={imageapi + image} alt={name} />
      <div className="content-list">
        <ul>
          <li><strong>{name}</strong></li>
          <li>{price}</li>
          <li>{rating} 👍</li>
          <li className="description">{description.join(",")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card