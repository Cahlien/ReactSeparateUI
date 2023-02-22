import {useEffect, useState} from 'react';
import {getUI} from "./Header.ui";

const Header = (props) => {
    const [count, setCount] = useState(1);
    const [title, setTitle] = useState(`My React App ${count}`);

    useEffect(() => setTitle(`My React App ${count}`), [count]);
    const changeTitle = () => {
        setCount(count + 1);
    };

    return getUI({title, changeTitle})
}

export default Header;