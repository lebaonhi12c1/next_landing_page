import React from 'react';
import style from '@/styles/footer.module.scss'
function Footer(props) {
    return (
        <div className={style.container}>
            <div className='grid wide'>
                <div className="row">
                    <div className="column mobile-12 tablet-12 pc-6">
                        <div className={style.heading}>
                            <div className={style.brand}>
                                av0cad0 creatives
                            </div>
                            <div className={style.sub}>
                                work with us
                            </div>
                        </div>
                    </div>
                    <div className="column mobile-12 tablet-12 pc-6">
                        <div className="row">
                            <div className="column mobile-12 tabet-12 pc-6 margin">
                                <div className={style.item}>
                                    <div>12 adam street ny use</div>
                                    <div>contact@lebaonhi12c1.dev <br/>0123635450</div>
                                </div>
                            </div>
                            <div className="column mobile-12 tabet-12 pc-6 margin">
                                <div className={style.item}>
                                    <div>follow us: <br/>_fb_in_be_tw</div>
                                    <div>copyright by 2023 lebaonhi12c1 interative, all right reserved</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;