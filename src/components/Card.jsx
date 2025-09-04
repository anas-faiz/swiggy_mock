const Card = ({ name, description, price, rating, image }) => {
  const imageapi = import.meta.env.VITE_IMAGE_KEY;

  return (
    <div className="card w-72 bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-3 hover:shadow-xl">
      <img
        src={imageapi + image}
        alt={name}
        className="w-full h-44 object-cover"
      />
      <div className="content-list p-4">
        <ul className="space-y-2 text-gray-700">
          <li className="text-lg font-bold text-gray-800">{name}</li>
          <li className="text-sm text-gray-600">{price}</li>
          <li className="text-sm text-yellow-600 font-medium">{rating} 👍</li>
          <li className="text-sm text-gray-500 line-clamp-2">
            {description.join(", ")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export const promotedRestaurantCard = (Card) => {
  return (props) => {
    <>
      <label>Promoted</label>
      <Card {...props} />
    </>;
  };
};

export default Card;
