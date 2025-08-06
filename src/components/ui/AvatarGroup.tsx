import Image from "next/image";

interface User {
  name: string;
  avatar: string;
}

interface AvatarGroupProps {
  users: User[];
  maxVisible?: number;
  maxNamesShown?: number;
  showNames?: boolean;
}

export default function AvatarGroup({ 
  users,
  maxVisible = 4,
  maxNamesShown = 3,
  showNames = true
}: AvatarGroupProps) {
  const visibleUsers = users.slice(0, maxVisible);
  const remainingCount = users.length - maxVisible;
  
  const visibleNames = users.slice(0, maxNamesShown).map(user => user.name);
  const remainingNamesCount = users.length - maxNamesShown;

  return (
    <div className="flex items-center space-x-2">
    <div className="flex -space-x-2">
        {visibleUsers.map((user, index) => (
          <Image
            key={index}
            src={user.avatar}
            alt={user.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
          />
        ))}
      </div>
       {showNames && (
        <div className="text-gray-600 text-sm font-medium ml-3">
          {visibleNames.join(", ")}
          {remainingNamesCount > 0 && ` +${remainingNamesCount} others`}
        </div>
      )}
    </div>
  );
}