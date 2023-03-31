import styled from "styled-components";

const TableClientsStyled = styled.table`
  --border-radius: 10px;
  --padding-border: 30px;

  background-color: ${(props) => props.theme.colors.light};
  border-radius: 10px;
  padding: 0 30px;
  width: 100%;
  min-width: 780px;
  max-width: 780px;
  overflow: hidden;
  border-collapse: collapse;

  thead {
    height: 50px;
  }

  thead.titles {
    th:first-child {
      padding-left: var(--padding-border);
      border-radius: var(--border-radius) 0 0 0;
    }

    th:last-child {
      padding-right: var(--padding-border);
      border-radius: 0 var(--border-radius) 0 0;
    }

    th {
      color: ${(props) => props.theme.colors.textColor.gray};
      padding: 8px;
      text-align: left;
      font-weight: 500;
    }
  }

  tbody {
  }

  tbody.data {
    background-color: ${(props) => props.theme.colors.light};

    tr:last-child {
      border-radius: 0 0 var(--border-radius) var(--border-radius);

      td:first-child {
        border-radius: 0 0 0 var(--border-radius);
      }

      td:last-child {
        border-radius: 0 0 var(--border-radius) 0;
      }
    }

    tr:hover {
      background-color: ${(props) => props.theme.colors.blueLigth};
      cursor: pointer;
      box-shadow: 0px 4px 4px 0px #0000000d;
    }

    td:first-child {
      padding-left: var(--padding-border);
    }

    td:last-child {
      padding-right: var(--padding-border);
    }

    td {
      color: ${(props) => props.theme.colors.textColor.default};
      border-top: 1px solid ${(props) => props.theme.colors.gray};
      height: 64px;
      padding: 8px;
      text-align: left;
    }
  }
`;

export default TableClientsStyled;
