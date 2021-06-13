interface DeafaultButtonProps {
  text: string;
}

export function DefaultButtom(props: DeafaultButtonProps) : JSX.Element  {
  return (
    <div className="change-password-button-container">
      <button className="save-button ">{props.text}</button>
    </div>
  );
}
