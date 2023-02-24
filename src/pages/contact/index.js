import React from 'react';
import Defaulayout from './../../components/layout/Defaulayout';
import style from '@/styles/contact.module.scss'
function Contact(props) {
    const input_datas = [
        {
            tag: 'input',
            type: 'text',
            placeholder: 'Username...',
        },
        {
            tag: 'input',
            type: 'number',
            placeholder: 'Phone...',
        },
        {
            tag: 'input',
            type: 'email',
            placeholder: 'Email...',
        },
        {
            tag: 'input',
            type: 'text',
            placeholder: 'Subject...',
        },
        {
            tag: 'textarea',
            type: 'text',
            placeholder: 'Message...',
        },
    ]
  
    return (
        <div className='margin_center'>
            <div className={style.contact}>
                <div className={style.contact_box}>
                    <div className={style.heading}>
                        get in touch
                    </div>
                    {input_datas.map(item=>{
                        return (
                            <item.tag type={item.type} placeholder={item.placeholder} spellCheck ={false}></item.tag>
                        )
                    })}
                    <div className="btn_primary">
                        Submit
                    </div>
                </div>
            </div>
        </div>
    );
}
Contact.getLayout = Defaulayout
export default Contact;