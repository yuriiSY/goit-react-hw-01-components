import styled from '@emotion/styled';

const TransactionHistoryRow = ({ transactions }) => {
  return (
    <TableBody>
      <TableBodyRow>{transactions.type}</TableBodyRow>
      <TableBodyRow>{transactions.amount}</TableBodyRow>
      <TableBodyRow>{transactions.currency}</TableBodyRow>
    </TableBody>
  );
};

export default TransactionHistoryRow;

const TableBodyRow = styled.td`
  border: 1px solid #dddddd;
  padding: 5px;
  text-align: center;
`;

const TableBody = styled.tr``;
