import styled from '@emotion/styled';

const StatisticsSection = styled.section`
  width: 500px;
  padding-top: 20px;
  border: 1px solid black;
  margin-bottom: 70px;
`;

const StatisticsTitle = styled.h2`
  width: 150px;
  margin: 0 auto;
`;

const StatisticsList = styled.ul`
  list-style-type: none;
  display: flex;
  width: 100%;
  height: 100px;
  border-top: 1px solid black;
  margin-top: 20px;
  li:not(:last-child) {
    border-right: 1px solid white;
  }
`;

const StatisticsListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
  color: white;
`;

const Statistics = ({ title, stats = [] }) => {
  const elements = stats.map(stat => (
    <StatisticsListItem
      style={{ backgroundColor: getRandomHexColor() }}
      key={stat.id}
    >
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
    </StatisticsListItem>
  ));

  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>{elements}</StatisticsList>
    </StatisticsSection>
  );
};

export default Statistics;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
