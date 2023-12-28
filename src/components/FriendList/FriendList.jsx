import FriendListItem from './FriendListItem';
import styled from '@emotion/styled';

const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendListItem
          name={friend.name}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          key={friend.id}
        ></FriendListItem>
      ))}
    </FriendsList>
  );
};

export default FriendList;

const FriendsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 400px;
  margin-bottom: 30px;
`;
