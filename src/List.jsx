import React from "react";

const List = () => {
    const [numbers, addNumber] = React.useState([]);

    const generateRandon = () => {
        return Math.round(Math.random() * 10);
    }

    const onClickAdd = () => {
        const newNum = generateRandon();
        addNumber([...numbers, newNum]);
    };

    const onClickRemove = () => {
        addNumber([]);
        // addNumber(numbers.map((num) => ''));
    };

    const onClickUpdate = () => {
        const newArr = numbers.map((num) => generateRandon())
        addNumber(newArr);
    };

    React.useEffect(() => {
        console.log('Обновился');

    }, [numbers]);

    return (
        <div>
            <button onClick={onClickAdd}>Добавить число</button>
            <button onClick={onClickUpdate}>Обновить числа</button>
            <button onClick={onClickRemove}>Очистить</button>
            <ul>
                {numbers.map((num, index) => <li key={index}>{num}</li>)}
            </ul >
        </div>
    );
}

export default List;



