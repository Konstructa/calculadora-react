import { InputContainer } from './styles';
import P from 'prop-types';

const Input = ({ value }) => {
    return (
      <InputContainer>
        <input disabled value={value}/>
      </InputContainer>
    );
  }
  
  export default Input;

Input.propTypes = { 
    value: P.string
}