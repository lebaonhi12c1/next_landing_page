import {v4 as uuidv4} from 'uuid'
const data = [
    {
        id: uuidv4(),
        name: 'design',
        title: 'Design',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut provident distinctio neque sapiente ipsam enim ratione veritatis molestias repellendus? Quis consequatur excepturi quisquam placeat voluptate fugit eum aperiam ipsam.',
        image: 'https://cdn5.vectorstock.com/i/1000x1000/39/29/painting-art-school-cartoon-graphic-design-vector-21513929.jpg',
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
        name: 'photography',
        title: 'Photography',
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