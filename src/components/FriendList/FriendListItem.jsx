import styled from '@emotion/styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsListItem>
      <FriendsItemStatus online={isOnline}></FriendsItemStatus>
      <img className="avatar" src={avatar} alt={name} width="55" height="55" />
      <FriendsItemName>{name}</FriendsItemName>
    </FriendsListItem>
  );
};

export default FriendListItem;

const FriendsListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 35px;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 20px;
`;
const FriendsItemName = styled.p`
  font-size: 30px;
`;
const FriendsItemStatus = styled.span`
  width: 40px;
  height: 40px;
  background-color: ${props => (props.online ? 'green' : 'red')};
  border-radius: 50%;
`;
