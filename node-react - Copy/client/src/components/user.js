// import React from 'react';

// class Users extends React.Component{
//     constructor(props){
//       super(props);
//       this.state = {
//         users: []
//     }
//     }
//     componentDidMount(){
//         fetch('api/users')
//         .then(res => res.json())
//         .then(users => {
//             this.setState({ users : users });
//     });
//     }
//     // callApi(){
//     //   fetch("http://localhost:5000/api/hello")
//     //   .then(res => res.text())
//     //   .then(res => this.setState({apiResponse:res}));
//     // }
//     // componentWillUnmount(){
//     //   this.callApi();
//     // }
//   render(){
//     return (
        
     
//       <ul>
//         {
//             this.state.users.map(user => (
//                 <li>Username :{user.username}, Age:{user.age}</li>
//             ))
//         }
//       </ul>
//     )
//   }
//   }
//   export default Users;
import React,{useState ,useEffect} from 'react'
import axios from 'axios'
//import { post } from '../../../server/routes/adminRoutes'

function Datafetching() {
    const [posts,setPosts] = useState([])
    useEffect(() => {
        axios
        .get('http://localhost:5000/api/admin/root')
        .then(res => {
            console.log('her is the result',res)
            setPosts(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    }, []
    )
    return (
        <div>
            <ul>
            {posts.map(post => (
            <li key={post.id_user}>{post.nom}</li>
             ))}
            </ul>
      
        </div>
    )
}
export default Datafetching