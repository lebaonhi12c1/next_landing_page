import React from 'react';
import Defaulayout from './../../components/layout/Defaulayout';
import { data } from '@/data';
import style from '@/styles/product.module.scss'
import classNames from 'classnames';
import Link from 'next/link';
function Product({product}) {
    return (
        <div className='margin_center'>
            <div className='grid wide'>
               <div className="row">
                <div className="column mobile-12 table-12 pc-8">
                        <div className={style.product_img_box}>
                            {product.images.map(item=>{
                                return (
                                    <img src={item} key={item.id}></img>
                                )
                            })}
                        </div>
                    </div>
                    <div className="column mobile-12 tablet-12 pc-4">
                        <div className={style.product_content}>
                            <div className={style.product_title}>
                                {product.title}
                            </div>
                            <div className={style.product_desc}>
                                {product.desc}
                            </div>
                            <Link href={'/contact'} className={classNames(style.btn_contact,'btn_primary')}>
                                Contact
                            </Link>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    );
}
export const getStaticPaths  = async()=>{
    const products = data
    const paths = products.map(item=>{
       return {
            params: {
                name: item.name
            }
       }
    })
    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps =  async (ctx)=>{
    const name = ctx.params.name
    const product = data.filter(item=>{
        return item.name === name
    })[0]
    return {
        props: {
            product
        }
    }
}
Product.getLayout = Defaulayout
export default Product;