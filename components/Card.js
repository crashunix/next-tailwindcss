const Card = (props) => (
  <div className="bg-gray-900 py-3 px-4 rounded-lg">
    <div className="flex justify-between items-center">
      <span className="text-xs text-gray-500 font-medium">{props.title}</span>
      <span className="text-2xl text-white">{props.value}</span>
    </div>
    {props.children && props.children}
  </div>
);

export default Card;
