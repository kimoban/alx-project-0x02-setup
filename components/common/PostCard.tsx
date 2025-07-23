import { PostProps } from '../../interfaces';

const PostCard = ({ id, title, body, userId }: PostProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
          Post #{id}
        </span>
        <span className="text-xs text-gray-500">
          User {userId}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-3 capitalize leading-tight">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed text-sm">
        {body.length > 120 ? `${body.substring(0, 120)}...` : body}
      </p>
      
      <div className="mt-4 pt-3 border-t border-gray-100">
        <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
          Read more →
        </button>
      </div>
    </div>
  );
};

export default PostCard;
