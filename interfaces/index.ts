// Interface for Card component props
export interface CardProps {
  title: string;
  content: string;
  isUserCreated?: boolean;
}

// Interface for Post data
export interface PostData {
  title: string;
  content: string;
}

// Interface for PostModal component props
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (postData: PostData) => void;
}

// Interface for Button component props
export interface ButtonProps {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
}

// Interface for Post props from API
export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// Interface for User props from API
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
