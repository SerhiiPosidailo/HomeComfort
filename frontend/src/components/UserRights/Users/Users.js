import { useEffect, useState } from "react";
import { userService } from "../../../service/userService";
import { User } from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll().then(({data})=>setUsers(data.data))
   }, []);

   const handleUpdate = (id) => {
    userService.getAll().then(({ data }) => setUsers(data.data));
};

    return (
        <div>
           {users.map(user => <User key={user.id} user={user} onUpdate={handleUpdate}/>)}
        </div>
    );
};

export { Users };