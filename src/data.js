import {v4 as uuidv4} from 'uuid'
const data = [
    {
        id: uuidv4(),
        name: 'design',
        title: 'Design',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut provident distinctio neque sapiente ipsam enim ratione veritatis molestias repellendus? Quis consequatur excepturi quisquam placeat voluptate fugit eum aperiam ipsam.',
        image: 'https://cdn5.vectorstock.com/i/1000x1000/39/29/painting-art-school-cartoon-graphic-design-vector-21513929.jpg',
        images: [
            'https://www.thespruce.com/thmb/gq45S3cRb66SXlSJuz4suej7xEw=/4200x2800/filters:fill(auto,1)/what-is-minimalist-design-4796583-03-37f2ac0fcfd74c0c905ea31398c20494.jpg',
            'https://media.architecturaldigest.com/photos/5852f886001c874267ed3d80/master/pass/fuigo-interior-designer-workspace-03.jpg',
            'http://www.interiorsbysteveng.com/wp-content/uploads/2016/09/4201-living_new-2.jpg',
            'https://www.fashiondivadesign.com/wp-content/uploads/2018/12/pexels-photo-1571460-1.jpeg',
            'https://cdnassets.hw.net/96/75/c46333614f6dac732bdbbf36796a/design-office-alterstudio-07-hero.jpg',
            'https://estestinc.com/wp-content/uploads/2019/03/clubhouses.jpg'
        ]
    },
    {
        id: uuidv4(),
        name: 'development',
        title: 'Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut provident distinctio neque sapiente ipsam enim ratione veritatis molestias repellendus? Quis consequatur excepturi quisquam placeat voluptate fugit eum aperiam ipsam.',
        image: 'https://cdn3.vectorstock.com/i/1000x1000/26/22/successful-development-and-growth-project-cartoon-vector-25822622.jpg',
        images: [
            'https://media.istockphoto.com/id/1143678440/photo/personal-growth-concept.jpg?s=612x612&w=0&k=20&c=93yxlOtOZWPUPRFardh7fAPaY-u0xZf9q0jjEaO0-To=',
            'https://thumbs.dreamstime.com/b/professional-development-programmer-cooperating-meeting-brai-professional-development-programmer-cooperating-meeting-132332458.jpg',
            'https://thumbs.dreamstime.com/b/businesswoman-doing-head-down-desk-high-angle-view-54979737.jpg',
            'https://media.istockphoto.com/id/923079848/photo/online-shopping.jpg?b=1&s=612x612&w=0&k=20&c=AGCCQmFNfirZcsK0_PhPqrhydUs_ISrK6VvTp-ahIb8=',
            'https://images.pexels.com/photos/3975589/pexels-photo-3975589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.unsplash.com/photo-1577900258307-26411733b430?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        ]
    },
    {
        id: uuidv4(),
        name: 'production',
        title: 'Production',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut provident distinctio neque sapiente ipsam enim ratione veritatis molestias repellendus? Quis consequatur excepturi quisquam placeat voluptate fugit eum aperiam ipsam.',
        image: 'https://media.istockphoto.com/vectors/production-line-vector-id165958933?k=6&m=165958933&s=612x612&w=0&h=ik3JKR3mUHfcVyH0IsQTqjtIMoCkbL_GGwVl09jzxNs=',
         images: [
            'https://open4business.com.ua/wp-content/uploads/2019/05/S1-CN183_0515in_M_20190514132251.jpg',
            'https://www.pcne.eu/uploads/tx_etim/44175_Bayer.jpg',
            'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/04/14/103548770-GettyImages-520478774rr.1910x1000.jpg',
            'https://www.accialiniconsulting.com/wp-content/uploads/2020/06/Factory.jpeg',
            'https://www.pveurope.eu/sites/default/files/styles/content__four_to_three/public/ezpublish/upswing-in-battery-cell-production-in-germany-and-europe.jpg?itok=Dg1k42vo',
            'https://cpats.s3.amazonaws.com/system/company_photos/570601/original/2016_03_23_ColumbiaTech_092658.jpg'
        ]
    },
    {
        id: uuidv4(),
        name: 'photography',
        title: 'Photography',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut provident distinctio neque sapiente ipsam enim ratione veritatis molestias repellendus? Quis consequatur excepturi quisquam placeat voluptate fugit eum aperiam ipsam.',
        image: 'https://static.vecteezy.com/system/resources/previews/000/466/463/original/photographer-flat-illustration-vector.jpg',
         images: [
            'https://www2.shutterstock.com/blog/wp-content/uploads/sites/5/2016/09/travel-photography.jpg',
            'http://goulburnregionalartgallery.com.au/media/uploads/2019_08/stock-2.jpg',
            'https://www.kranchevphotography.com/wp-content/uploads/2013/09/014-2013_Sunsets_And_Sunrises-Big1800.jpg',
            'https://inspgr.id/app/uploads/2020/03/photography-martin-rak-16.jpg',
            'https://i0.wp.com/photolisticlife.com/wp-content/uploads/2012/10/1012_untitled_036.jpg',
            'https://static.photocdn.pt/images/articles/2018/02/12/articles/2017_8/iStock-543178720-min.jpg'
        ]
    },
]
const users = [
    {
        id: uuidv4(),
        logo: 'https://i.pinimg.com/564x/a1/cf/67/a1cf6782e1d737865bdeca4fec7fc5fd.jpg',
        avatar: 'https://w7.pngwing.com/pngs/550/107/png-transparent-avatar-bear-teepublic-t-shirt-avatar-heroes-carnivoran-poster.png',
        comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, itaque consequatur. Dolorum similique doloribus commodi cum itaque et consequuntur autem. Tempore cumque ea blanditiis odit ipsam consectetur architecto iste tenetur.',
        name: 'Halord Brown',
        title:'Executive Manager',
    },
    {
        id: uuidv4(),
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png',
        avatar: 'https://img.lovepik.com/free-png/20210926/lovepik-lion-avatar-cartoon-flat-vector-png-image_401405888_wh1200.png',
        comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, itaque consequatur. Dolorum similique doloribus commodi cum itaque et consequuntur autem. Tempore cumque ea blanditiis odit ipsam consectetur architecto iste tenetur.',
        name: 'Halord Brown',
        title:'Executive Manager',
    },
    {
        id: uuidv4(),
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png',
        avatar: 'https://media.istockphoto.com/id/1087272550/vector/tiger-in-a-black-top-hat-funny-face-cute-cartoon-animal-character-avatar-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=8Za1j5Yad_FMWrCHTnCUXXJz6Rf4xNCNeoAld5Bmyf4=',
        comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, itaque consequatur. Dolorum similique doloribus commodi cum itaque et consequuntur autem. Tempore cumque ea blanditiis odit ipsam consectetur architecto iste tenetur.',
        name: 'Halord Brown',
        title:'Executive Manager',
    },
    
]
export {data,users}