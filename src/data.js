import {v4 as uuidv4} from 'uuid'
const data = [
    {
        id: uuidv4(),
        name: 'design',
        title: 'Design',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut provident distinctio neque sapiente ipsam enim ratione veritatis molestias repellendus? Quis consequatur excepturi quisquam placeat voluptate fugit eum aperiam ipsam.',
        image: 'https://cdn5.vectorstock.com/i/1000x1000/39/29/painting-art-school-cartoon-graphic-design-vector-21513929.jpg'
    },
    {
        id: uuidv4(),
        name: 'development',
        title: 'Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut provident distinctio neque sapiente ipsam enim ratione veritatis molestias repellendus? Quis consequatur excepturi quisquam placeat voluptate fugit eum aperiam ipsam.',
        image: 'https://cdn3.vectorstock.com/i/1000x1000/26/22/successful-development-and-growth-project-cartoon-vector-25822622.jpg'
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