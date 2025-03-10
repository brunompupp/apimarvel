import styled from '@emotion/styled';
import { mq } from '~/hooks/use-theme';

export const Header = styled.header`
  height: ${({ theme }) => theme.size.largeX}px;
  padding: ${({ theme }) => `${theme.spacing.small}px ${theme.spacing.semi}px`};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${() =>
    mq({
      justifyContent: ['center', 'space-between'],
    })}
`;

export const LeftRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const RightRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  & > button {
    margin-right: ${({ theme }) => theme.spacing.tiny}px;
  }

  & button:last-child {
    margin-left: ${({ theme }) => theme.spacing.tiny}px;
    margin-right: ${({ theme }) => theme.spacing.none}px;
  }
`;

export const SearchInput = styled.input`
  width: 400px;
`;
