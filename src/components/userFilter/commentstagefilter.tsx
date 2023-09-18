// import { useUser } from "../../hooks/use.users";

// function UserFilter() {
//   const { term, handleSearch, filteredUsers, setTerm } = useUser();
//   return (
//     <>
//       <section className="section">
//         <input
//           value={term}
//           onChange={(e) => {
//             setTerm(e.target.value);
//             handleSearch(e.target.value);
//           }}
//           placeholder="Busca a un usuario"
//         />
//         <ul>
//           {filteredUsers.map((user) => (
//             <li key={user.id}>{user.userName}</li>
//           ))}
//         </ul>
//       </section>
//     </>
//   );
// }
// export default UserFilter;
