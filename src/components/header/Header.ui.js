import React, {Fragment} from "react";
import styles from "./Header.module.css";

export const getUI = (props) => (
    <Fragment>
        <header className={`header ${styles.myHeader}`}>
            <h1 className="header__title" onClick={props.changeTitle}>{props.title}</h1>
        </header>
    </Fragment>
);