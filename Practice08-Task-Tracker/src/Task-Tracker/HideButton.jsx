const HideButton = ({ visible, toggleVisibility }) => {
    
  const handleClick = () => {
      toggleVisibility(!visible);
    };
  
    return (
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
        onClick={handleClick}
      >
        {visible ? "Hide" : "Show"}
      </button>
    );
  };
  
  export default HideButton;
  