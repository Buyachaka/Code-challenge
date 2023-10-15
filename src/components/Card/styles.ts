import styled from 'styled-components';

export const Container = styled.div<{hasNavigation: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #2c3e50;
  background: linear-gradient(135deg, #e0eafc 0%, #cfdde6 100%);
  padding: 20px;
  width: 250px;
  max-height: 200px;
  cursor: ${props => (props.hasNavigation ? 'pointer' : 'default')};
  margin: 5px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  font-weight: 500;

  &:hover {
    transform: ${props => (props.hasNavigation ? 'scale(1.05)' : 'none')};
    box-shadow: ${props => (props.hasNavigation ? '0 5px 20px rgba(0, 0, 0, 0.2)' : '0 4px 15px rgba(0, 0, 0, 0.1)')};
  }

  transition: all 0.3s ease-in-out;
`;
