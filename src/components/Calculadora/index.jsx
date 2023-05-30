import Input from '../Input';
import Button from '../Button';
import {  Row } from './styles';
import useCalculadora from '../../hooks/useCalculadora';


export const Calculadora = () => {
    const { currentNumber, handleAddNumber, handleOnClear, handleSumNumbers, handleDivideNumbers, handleMinusNumbers, handleMultiplyNumbers, handleEquals } = useCalculadora();

    return (
    <>
        <Input value={currentNumber}/>
        <Row>
            <Button label="x"onClick={handleMultiplyNumbers}/>
            <Button label="/" onClick={handleDivideNumbers}/>
            <Button label="c" onClick={handleOnClear}/>
            <Button label="."/>
        </Row>
        <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="=" onClick={handleEquals}/>
        </Row>
        </>

    );
}
