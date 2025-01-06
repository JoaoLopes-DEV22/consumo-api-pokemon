import React from 'react';
import loader from './loader.gif';
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.container_loader}>
            <img src={loader} alt="Carregando..." />
        </div>
    );
};

export default Loader;
