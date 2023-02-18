import { users } from '@/data';
import React from 'react';
import style from '@/styles/testimonials.module.scss'
import Circle from './Circle';
function Testimonials(props) {
    const user_list = users
    return (
        <div className={style.container}>
            <div className={style.heading}>
                Testimonials
                <Circle backgroundColor='rgb(85, 0, 146)' width='700px' height = '700px' bottom='0' />
            </div>
            <div className='row'>
                {user_list.map(item=>{
                    return (
                        <div className="column mobile-12 tablet-12 pc-4 margin" key={item.id}>
                            <div className={style.user}>
                                <div className={style.logo}>
                                    <img src={item.logo} alt="" />
                                </div>
                                <div className={style.comment}>
                                    {item.comment}
                                </div>
                                <div className={style.info}>
                                    <img src={item.avatar} alt=""/>
                                    <div className={style.info_content}>
                                        <div className={style.name}>
                                            {item.name}
                                        </div>
                                        <div className={style.title}>
                                            {item.title}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Testimonials;