// // Displaymore.js
// import React, { useState } from 'react';

// const Displaymore = ({ loadMoreJokes, moreJokes }) => {
//   const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

//   const displayNextJoke = () => {
//     if (currentJokeIndex < moreJokes.length - 1) {
//       setCurrentJokeIndex(currentJokeIndex + 1);
//     } else {
//       // If at the end of the array, fetch new jokes
//       loadMoreJokes();
//       setCurrentJokeIndex(0);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <div>
//           <p>Setup: {moreJokes[currentJokeIndex]?.setup}</p>
//           <p>Punchline: {moreJokes[currentJokeIndex]?.punchline}</p>
//           <hr />
//         </div>
//       </div>
//       <button onClick={displayNextJoke}>Display Next Joke</button>
//     </div>
//   );
// };

// export default Displaymore;
