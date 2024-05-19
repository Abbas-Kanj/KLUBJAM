// import React, { useRef } from "react";
// import { useDrag, DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import io from "socket.io-client";

// const socket = io("ws://localhost:3000");

// const AudioItem = ({ audioBlob }) => {
//   const [, drag] = useDrag({
//     type: "audio",
//     item: { audioBlob },
//   });

//   return (
//     <div
//       ref={drag}
//       style={{ border: "1px solid black", margin: "5px", padding: "5px" }}
//     >
//       Audio Blob
//     </div>
//   );
// };

// const BlobsContainer = () => {
//   const audioRef = useRef(null);

//   const handleSendAudio = async (audioBlob: any) => {
//     socket.emit("sendAudio", audioBlob);
//   };

//   socket.on("audioStream", (audioBlob) => {
//     // Handle received audio blob
//     const audioUrl = URL.createObjectURL(audioBlob);
//     audioRef.current!.src = audioUrl;
//   });

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div>
//         <audio ref={audioRef} controls />
//         <div style={{ display: "flex", flexWrap: "wrap" }}>
//           <AudioItem audioBlob={/* provide audio blob */} />
//           {/* Add more AudioItem components for each audio blob */}
//         </div>
//         <button onClick={() => handleSendAudio(/* provide audio blob */)}>
//           Send Audio
//         </button>
//       </div>
//     </DndProvider>
//   );
// };

// export default BlobsContainer;
