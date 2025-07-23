import { CardProps } from '../../interfaces';

const Card = ({ title, content, isUserCreated = false }: CardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 relative">
      {isUserCreated && (
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            New
          </span>
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-800 mb-3 pr-12">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default Card;
