import styled from '@emotion/styled';
import TransactionHistoryRow from './TransactionHistoryRow';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadRow>Type</TableHeadRow>
          <TableHeadRow>Amount</TableHeadRow>
          <TableHeadRow>Currency</TableHeadRow>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryRow
            key={item.id}
            transactions={item}
          ></TransactionHistoryRow>
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionHistory;

const Table = styled.table`
  width: 60%;
  margin-bottom: 20px;
  border: 1px solid #dddddd;
  border-collapse: collapse;

  tr:nth-of-type(even) {
    background: gainsboro;
  }
`;

const TableHeadRow = styled.th`
  font-weight: bold;
  padding: 5px;
  background: darkturquoise;
  color: white;
  border: 1px solid #dddddd;
`;
