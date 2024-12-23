import {toast } from 'react-toastify';

function Counter() {

  //Simple Toasts
  const showSuccessToast = () => {
    toast.success("Success! Everything worked perfectly.");
  };

  const showErrorToast = () => {
    toast.error("Oops! Something went wrong.");
  };

  //Complex Toasts with features
  const notify = () => {
    toast("Toast with Features 🚀", {
      position: "bottom-center",     // Change position to bottom-center
      autoClose: 5000,              // Close after 5 seconds
      hideProgressBar: false,     // Show the progress bar
      closeOnClick: true,        // Close when clicked
      pauseOnHover: true,       // Pause when hovered
      draggable: true,         // Allow dragging
      type: "error",          // Type of toast (success, error, etc.)
      theme: "colored",      // Theme: light, dark, or colored
    });
  };


  return(
    <div className="p-[20px]">
    <button onClick={showSuccessToast} className='bg-green-500'>Show Success Toast</button>
    <button onClick={showErrorToast} className="m-[10px] bg-red-600">
      Show Error Toast
    </button>
    <button onClick={notify} className="m-[10px] bg-purple-600">
      My Toast A
    </button>
  </div>
  );
}

export default Counter;
