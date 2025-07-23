import { UserProps } from '../../interfaces';

const UserCard = ({ id, name, username, email, address, phone, website, company }: UserProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">@{username}</p>
          </div>
        </div>
        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
          ID: {id}
        </span>
      </div>

      {/* Contact Information */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-sm text-gray-600">{email}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-sm text-gray-600">{phone}</span>
        </div>

        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
          </svg>
          <span className="text-sm text-blue-600 hover:underline cursor-pointer">{website}</span>
        </div>
      </div>

      {/* Address Section */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Address</h4>
        <p className="text-sm text-gray-600">
          {address.suite} {address.street}
        </p>
        <p className="text-sm text-gray-600">
          {address.city}, {address.zipcode}
        </p>
      </div>

      {/* Company Section */}
      <div className="p-3 bg-blue-50 rounded-lg">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Company</h4>
        <p className="text-sm font-semibold text-gray-800">{company.name}</p>
        <p className="text-xs text-gray-600 italic">&ldquo;{company.catchPhrase}&rdquo;</p>
        <p className="text-xs text-gray-500 mt-1">{company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;
