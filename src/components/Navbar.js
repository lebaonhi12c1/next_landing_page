import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import style from '../styles/navbar.module.scss'
function Navbar(props) {
    const [isopen, setisopen] = useState(false)
    return (
        <div className={style.navbar}>
            <div className={classNames('grid','wide',style.sub)}>
                <div className={style.container}>
                    <Link href={'/'} className={style.left}>
                        av0cado
                    </Link>
                    <ul className={style.right}>
                        <li className={style.nav_item}>
                            <Link href={'/product/design'} className={style.nav_link}>
                                design
                            </Link>
                        </li>
                        <li className={style.nav_item}>
                            <Link href={'/product/development'} className={style.nav_link}>
                                development
                            </Link>
                        </li>
                        <li className={style.nav_item}>
                            <Link href={'/product/production'} className={style.nav_link}>
                                production
                            </Link>
                        </li>
                        <li className={style.nav_item}>
                            <Link href={'/product/photography'} className={style.nav_link}>
                                photography    
                            </Link>
                        </li>
                        <li className={style.nav_item}>
                            <Link href={'/contact'} className={style.nav_link}>
                                contact
                            </Link>
                        </li>
                    </ul>
                    <div className={style.toggle_nav} onClick={()=>setisopen(!isopen)}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zoFJpEvgFGr4tf2Z3q48PPHn4Gwpifcv-OBe8Rk2E6_STteVLkPDhjum5UFVyFACCX4&usqp=CAU" alt="" />
                    </div>
                </div>
            </div>
            {isopen && <ul className={style.nav_mobile}>
                <li className={style.nav_item}>
                    <Link href={'/product/design'} className={style.nav_link} onClick={()=>setisopen(false)}>
                        design
                    </Link>
                </li>
                <li className={style.nav_item}>
                    <Link href={'/product/development'} className={style.nav_link} onClick={()=>setisopen(false)}>
                        development
                    </Link>
                </li>
                <li className={style.nav_item}>
                    <Link href={'/product/production'} className={style.nav_link} onClick={()=>setisopen(false)}>
                        production
                    </Link>
                </li>
                <li className={style.nav_item}>
                    <Link href={'/product/photography'} className={style.nav_link} onClick={()=>setisopen(false)}>
                        photography    
                    </Link>
                </li>
                <li className={style.nav_item}>
                    <Link href={'/contact'} className={style.nav_link} onClick={()=>setisopen(false)}>
                        contact
                    </Link>
                </li>
            </ul>}
        </div>
    );
}

export default Navbar;