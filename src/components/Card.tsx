interface CardProps {
  image: string,
  title: string,
  description: string
}
const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className={` flex flex-col rounded-lg py-4 hover:shadow-lg bg-gray-200 text-center`}>
      <div className=" flex justify-between px-6 py-4 ">
        <img
          className="rounded-lg hover:scale-105 hover:transition  w-full h-72"
          src={image} alt="Online Community" />
      </div>
      <p className="text-lg text-blue-500 hover:text-orange-400 cursor-text py-3">{title}</p>
      <p className="px-4">{description}</p>
    </div>
  )
}
export default Card;