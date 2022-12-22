const ListIcon = ({ height = "15", width = "15", className }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 15 15"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="14.5036" height="3.22302" rx="1" />
      <rect y="11.2773" width="14.5036" height="3.22302" rx="1" />
      <rect y="5.88867" width="14.5036" height="3.22302" rx="1" />
    </svg>
  );
};

export default ListIcon;
