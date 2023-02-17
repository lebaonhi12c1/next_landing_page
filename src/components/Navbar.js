import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import style from '../styles/navbar.module.scss'
function Navbar(props) {
    return (
        <div className={style.navbar}>
            <div className={classNames('grid','wide',style.sub)}>
                <div className={style.container}>
                    <div className={style.left}>
                        <img src="" alt="" />
                    </div>
                    <ul className={style.right}>
                        <li className={style.nav_item}>
                            <Link href={'/'} className={style.nav_link}>
                                desing
                            </Link>
                        </li>
                        <li className={style.nav_item}>
                            <Link href={'/'} className={style.nav_link}>
                                development
                            </Link>
                        </li>
                        <li className={style.nav_item}>
                            <Link href={'/'} className={style.nav_link}>
                                production
                            </Link>
                        </li>
                        <li className={style.nav_item}>
                            <Link href={'/'} className={style.nav_link}>
                                phohrefgraphy    
                            </Link>
                        </li>
                        <li className={style.nav_item}>
                            <Link href={'/'} className={style.nav_link}>
                                contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;