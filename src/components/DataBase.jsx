// import { ref, getDatabase } from 'firebase/database';
// import { useList } from 'react-firebase-hooks/database';

// const database = getDatabase(firebaseApp);

// const DatabaseList = () => {
//   const [snapshots, loading, error] = useList(ref(database, 'list'));

//   return (
//     <div>
//       <p>
//         {error && <strong>Error: {error}</strong>}
//         {loading && <span>List: Loading...</span>}
//         {!loading && snapshots && (
//           <React.Fragment>
//             <span>
//               List:{' '}
//               {snapshots.map((v) => (
//                 <React.Fragment key={v.key}>{v.val()}, </React.Fragment>
//               ))}
//             </span>
//           </React.Fragment>
//         )}
//       </p>
//     </div>
//   );
// };