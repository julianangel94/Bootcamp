//export nombrado obliga a imporatrlo con en nombre y {}
export const Note = (props) => {
  console.log({ props });

  const { title, body } = props;

  return (
    <li>
      <h3>{title}</h3>
      <small>
        <p>{body}</p>
      </small>
    </li>
  );
};

//export por defecto
// export default Note;
