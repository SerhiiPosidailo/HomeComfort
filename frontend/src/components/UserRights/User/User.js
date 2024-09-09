import { userService } from "../../../service/userService";

import css from './Users.module.css'


const User = ({user, onUpdate}) => {
    const {id, email, username, is_active, is_staff, is_superuser, last_login} = user;

    const handleMakeAdmin = () => {
        userService.toAdmin(id).then(() => onUpdate(id));
    };

    const handleRemoveAdmin = () => {
        userService.toUser(id).then(() => onUpdate(id));
    };

    const handleBlock = () => {
        userService.userBlock(id).then(() => onUpdate(id));
    };

    const handleUnblock = () => {
        userService.userUnBlock(id).then(() => onUpdate(id));
    };

    return (
        <div>
             <h1>User Details</h1>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{id}</td>
          </tr>
          <tr>
            <th>Електронна пошта</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>Псевдонім</th>
            <td>{username}</td>
          </tr>
          <tr>
            <th>Активний</th>
            <td>{is_active ? 'Так' : 'Ні'}</td>
          </tr>
          <tr>
            <th>Адмін</th>
            <td>{is_staff ? 'Так' : 'Ні'}</td>
          </tr>
          <tr>
            <th>Супер_Адмін</th>
            <td>{is_superuser ? 'Так' : 'Ні'}</td>
          </tr>
          <tr>
            <th>Останя Вхід</th>
            <td>{last_login}</td>
          </tr>
        </tbody>
      </table>
      <div className={css.button}>
                <button onClick={handleMakeAdmin} disabled={is_staff}>Зробити адміністратором</button>
                <button onClick={handleRemoveAdmin} disabled={!is_staff}>Видалити адміністратора</button>
                <button onClick={handleBlock} disabled={!is_active}>Блокувати</button>
                <button onClick={handleUnblock} disabled={is_active}>Розблокувати</button>
            </div>
        </div>
    );
};

export { User };