import React from 'react';
import Img from './Img';
import styles from "./ImgList.module.css"

const ImgList = props => {
    const results = props.data;
    let imgs;
    if (results.length > 0) {
        imgs = results.map(img =>
            <Img
                url={img.urls.full}
                user={img.user.links.html}
                name={img.user.name}
                link={img.links.html}
                key={img.id}
            />
        );
    }

    return (
        <div className={styles["test"]}>
            {imgs}
        </div>
    );
};

export default ImgList;