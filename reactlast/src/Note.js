//export nombrado obliga a imporatrlo con en nombre y {}
export const Note = (props) => {
  console.log({ props });

  const { content } = props;

  return (
    <li>
      <h3>{content}</h3>
      <small>
        <p>{content}</p>
      </small>
    </li>
  );
};

//export por defecto
// export default Note;
