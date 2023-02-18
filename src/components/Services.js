import React from 'react';
import style from '@/styles/services.module.scss'
import classNames from 'classnames';
import Link from 'next/link';
function Services({services}) {
    return (
        <div className={style.container}>
            <div className={style.heading}>
                What we can do ?
            </div>
            <div className={style.sub_heading}>
                Service's we can help you
            </div>
            <div className={classNames(style.services,'row')}>
                {services.map(item=>{
                    return (
                        <div key={item.id} className='column mobile-12 tablet-12 pc-6 margin'>
                            <Link href={`/services/${item.id}`} className={style.services_box}>
                                <div className={style.title}>
                                    {item.title}
                                </div>
                                <div className={style.img_box}>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className={style.desc}>
                                   <p className={style.content}> {item.desc}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Services;