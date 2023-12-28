import styled from '@emotion/styled';

const ProfileCard = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border: 2px solid black;
  border-radius: 5px;
  margin-bottom: 100px;
`;

const ProfileStat = styled.ul`
  list-style-type: none;
  display: flex;
  width: 100%;
  height: 100px;
  border-top: 1px solid black;
  li:not(:last-child) {
    border-right: 1px solid black;
  }
`;

const ProfileStatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
  background-color: gray;
`;
const ProfileStatItemQuanity = styled.span`
  font-weight: 700;
`;

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

const ProfileImg = styled.img`
  margin-bottom: 70px;
  border-radius: 200px;
  border: 1px solid black;
  background-color: green;
`;

const ProfileText = styled.p`
  margin-bottom: 10px;
`;

const ProfileTextName = styled.p`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 20px;
`;

const Profile = ({ userItems }) => {
  return (
    <ProfileCard>
      <ProfileDescription>
        <ProfileImg
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className="avatar"
          width={250}
          height={250}
        />
        <ProfileTextName>{userItems.username}</ProfileTextName>
        <ProfileText>{userItems.tag}</ProfileText>
        <ProfileText>{userItems.location}</ProfileText>
      </ProfileDescription>

      <ProfileStat>
        <ProfileStatItem>
          <span className="label">Followers</span>
          <ProfileStatItemQuanity>
            {userItems.stats.followers}
          </ProfileStatItemQuanity>
        </ProfileStatItem>
        <ProfileStatItem>
          <span className="label">Views</span>
          <ProfileStatItemQuanity>
            {userItems.stats.views}
          </ProfileStatItemQuanity>
        </ProfileStatItem>
        <ProfileStatItem>
          <span className="label">Likes</span>
          <ProfileStatItemQuanity>
            {userItems.stats.likes}
          </ProfileStatItemQuanity>
        </ProfileStatItem>
      </ProfileStat>
    </ProfileCard>
  );
};

export default Profile;
